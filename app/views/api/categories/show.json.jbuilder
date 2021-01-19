# frozen_string_literal: true

json.extract! @category, :id, :name

json.products do
  json.array! @category.products do |product|
    json.partial! 'api/products/product', product: product
  end
end
