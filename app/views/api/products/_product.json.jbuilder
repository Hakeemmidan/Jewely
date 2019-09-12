json.extract! product, :id, :title, :description, :price, :seller_id, :photoUrl

if product.photo && product.photo.attached?
    json.photoUrl url_for(product.photo)
else 
    file = File.open('app/assets/images/Jewely.jpg')
    product.photo.attach(io: file, filename: 'defaultJewely.jpg')
    json.photoUrl url_for(product.photo)
end