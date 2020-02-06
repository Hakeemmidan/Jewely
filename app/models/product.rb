class Product < ApplicationRecord
    validates :title, :description, :price, :seller_username, presence: true
    validates :seller_id, presence: true
    has_many_attached :photos

    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: 'User'

    has_many :carts,
        foreign_key: :product_id,
        class_name: 'Cart'

    has_many :cart_customers,
        through: :carts,
        source: :customer

    has_many :reviews,
        foreign_key: :product_id,
        class_name: 'Review'
end