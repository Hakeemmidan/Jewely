class AddSellerUsernameToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :seller_username, :string
  end
end
