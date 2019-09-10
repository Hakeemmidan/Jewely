json.extract! product, :id, :title, :description, :price
json.photoUrl url_for(product.photo)