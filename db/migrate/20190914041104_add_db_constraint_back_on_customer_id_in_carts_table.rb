class AddDbConstraintBackOnCustomerIdInCartsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :customer_id
    add_column :carts, :customer_id, :integer, null: false
  end
end
