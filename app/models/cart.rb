class Cart < ApplicationRecord
    validates :customer_id, :product_id, presence: true

    belongs_to :customer,
        foreign_key: :customer_id,
        class_name: 'User'

    belongs_to :cart_item,
        foreign_key: :product_id,
        class_name: 'Product'
end
