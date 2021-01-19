# frozen_string_literal: true

class Review < ApplicationRecord
  validates :body, :author_username, presence: true
  validates :rating, inclusion: { in: (1..5) }
  validates :author_id, :product_id, presence: true

  belongs_to :author,
             class_name: 'User'

  belongs_to :product,
             class_name: 'Product'
end
