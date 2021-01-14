# frozen_string_literal: true

class User < ApplicationRecord
  validates :username, presence: true, uniqueness: { scope: :session_token }
  validates :password_digest, presence: { message: 'Password can\'t be blank' }
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :products,
           foreign_key: :seller_id,
           class_name: 'Product',
           dependent: :destroy,
           inverse_of: :seller

  has_one :cart,
          foreign_key: :customer_id,
          class_name: 'Cart',
          dependent: :destroy,
          inverse_of: :customer

  has_many :reviews,
           foreign_key: :author_id,
           class_name: 'Review',
           dependent: :destroy,
           inverse_of: :author

  has_many :cart_products,
           through: :cart,
           source: :product,
           dependent: :destroy

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    save!
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
