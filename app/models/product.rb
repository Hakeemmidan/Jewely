class Product < ApplicationRecord
    validates :title, :description, :price, presence: true
    validates :seller_id, presence: true
    # note : this ^ triggers helper method. Notice that it is validate
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