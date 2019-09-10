class Product < ApplicationRecord
    validates :title, :description, :price, :quantity, presence: true
    validates :seller_id, :cart_id, :review_id, presence: true

    has_one_attached :photo
end