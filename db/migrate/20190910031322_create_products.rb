class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.decimal :price, precision: 15, scale: 2
      t.integer :quantity, null: false
      t.integer :seller_id, null: false
      t.integer :cart_id, null: false
      t.integer :review_id, null: false
      t.timestamps
    end
    add_index :products, :title
    add_index :products, :description
    add_index :products, :seller_id
    add_index :products, :cart_id
    add_index :products, :review_id
  end
end
