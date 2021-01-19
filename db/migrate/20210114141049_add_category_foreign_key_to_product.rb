class AddCategoryForeignKeyToProduct < ActiveRecord::Migration[6.0]
  def up
    add_column :products, :category_id, :integer
    add_foreign_key :products, :categories
  end

  def down
    remove_foreign_key :products, :categories
    remove_column :products, :category_id
  end
end
