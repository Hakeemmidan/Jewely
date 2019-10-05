class Product < ApplicationRecord
    validates :title, :description, :price, presence: true
    validates :seller_id, presence: true
    # has_one_attached :photo
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
        
    # def self.find_by_title(title)    
    #     product = Product.find_by(title: title)
    #     return nil unless product
    #     product
    # end
    # Task : ^ Not sure if I am going to need this or not
end