# frozen_string_literal: true

class Cart < ApplicationRecord
  validates :customer_id, :product_id, presence: true

  belongs_to :customer,
             class_name: 'User'

  belongs_to :product,
             class_name: 'Product'
end
