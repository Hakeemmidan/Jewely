class Product < ApplicationRecord
    validates :title, :description, :price, :quantity, presence: true
    validates :seller_id, :cart_id, :review_id, presence: true

    has_one_attached :photo

    belongs_to :seller,
        foreign_key: :seller_id,
        class_name: 'User'

    def self.find_by_title(title)    
        product = Product.find_by(title: title)
        return nil unless product
        product
    end
    # Task : ^ Not sure if I am going to need this or not
end