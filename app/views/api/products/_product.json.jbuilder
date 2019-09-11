json.extract! product, :id, :title, :description, :price, :seller_id
json.photoUrl url_for(product.photo)