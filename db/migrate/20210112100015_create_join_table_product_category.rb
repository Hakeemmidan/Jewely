class CreateJoinTableProductCategory < ActiveRecord::Migration[6.0]
  def change
    create_join_table :products, :categories, column_options: { null: false, foreign_key: true } do |t|
      t.index [:product_id, :category_id], unique: true
      t.index [:category_id, :product_id], unique: true
    end
  end
end
