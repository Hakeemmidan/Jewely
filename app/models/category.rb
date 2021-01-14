# frozen_string_literal: true

class Category < ApplicationRecord
  validates :name, presence: true

  has_many :products,
           class_name: 'Product',
           dependent: :destroy,
           inverse_of: :category
end
