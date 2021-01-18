# frozen_string_literal: true

class Category < ApplicationRecord
  validates :name, presence: true
  has_one_attached :photo

  has_many :products,
           class_name: 'Product',
           dependent: :nullify,
           inverse_of: :category
end
