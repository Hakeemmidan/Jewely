# frozen_string_literal: true

json.extract! product, :id, :title, :description, :price, :seller_id, :reviews, :category_id, :seller_username

if product.photos.attached?
  json.photoFiles product.photos.map { |file| file }
  json.photoUrls product.photos.map { |file| url_for(file) }
else
  file = File.open('app/assets/images/Jewely.jpg')
  product.photos.attach(io: file, filename: 'defaultJewely.jpg')
  json.photoUrls url_for(product.photos[0])
end
