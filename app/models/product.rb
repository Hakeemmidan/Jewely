# frozen_string_literal: true

class Product < ApplicationRecord
  validates :title, :description, :price, :seller_username, presence: true
  validates :seller_id, presence: true
  has_many_attached :photos

  belongs_to :seller,
             class_name: 'User'

  has_many :carts,
           class_name: 'Cart',
           dependent: :destroy

  has_many :cart_customers,
           through: :carts,
           source: :customer

  has_many :reviews,
           class_name: 'Review',
           dependent: :destroy
end
