json.extract! product, :id, :title, :description, :price, :seller_id
debugger
json.photoUrl url_for(product.photo)