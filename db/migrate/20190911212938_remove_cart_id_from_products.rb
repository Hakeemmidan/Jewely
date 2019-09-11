class RemoveCartIdFromProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :cart_id
  end
end
