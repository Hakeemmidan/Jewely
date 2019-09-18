json.extract! product, :id, :title, :description, :price, :seller_id, :photoUrls

if product.photos.attached?
    json.photoUrls product.photos.map { |file| url_for(file) }
else
    file = File.open('app/assets/images/Jewely.jpg')
    product.photos.attach(io: file, filename: 'defaultJewely.jpg')
    json.photoUrls url_for(product.photos[0])
end