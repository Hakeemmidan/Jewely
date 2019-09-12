json.extract! product, :id, :title, :description, :price, :seller_id
if product.photo.attached? && product.photo.blob? && product.photo 
    json.photoUrl url_for(product.photo)
end