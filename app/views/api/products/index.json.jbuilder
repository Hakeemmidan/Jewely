json.array! @products do |product|
    json.extract! product, :id, :title
    json.photoUrl url_for(product.photo)
end