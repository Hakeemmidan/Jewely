class ChangeSellerIdColumnConstrints < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :customer_id
    add_column :carts, :customer_id, :integer
  end
end
