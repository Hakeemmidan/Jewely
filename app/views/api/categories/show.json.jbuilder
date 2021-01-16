# frozen_string_literal: true

json.extract! @category, :id, :name

json.products @category.products do |product|
  json.partial! 'api/products/product', product: product
end
