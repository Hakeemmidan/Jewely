# frozen_string_literal: true

class Product < ApplicationRecord
  validates :title, :description, :price, :seller_username, presence: true
  validates :seller_id, presence: true
  has_many_attached :photos

  belongs_to :seller,
             class_name: 'User'

  belongs_to :category,
             class_name: 'Category'

  has_many :carts,
           class_name: 'Cart',
           dependent: :nullify,

  has_many :reviews,
           class_name: 'Review',
           dependent: :nullify,

  has_many :cart_customers,
           through: :carts,
           source: :customer
end
