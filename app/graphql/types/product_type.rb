module Types
  class ProductType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: false
    field :price, Float, null: false
    field :seller_username, String, null: true
  end
end
