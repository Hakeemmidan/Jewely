class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :customer_id, null: false
      t.integer :product_id, null: false
    end

    add_index :carts, [:customer_id, :product_id]
  end
end
