class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.decimal :rating, null: false, precision: 2, scale: 1
      t.integer :author_id, null: false
      t.integer :product_id, null: false
      t.timestamps
    end

    add_index :reviews, [:author_id, :product_id]
  end
end
