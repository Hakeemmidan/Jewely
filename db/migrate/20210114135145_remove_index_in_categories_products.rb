class RemoveIndexInCategoriesProducts < ActiveRecord::Migration[6.0]
  def change
    remove_index :categories_products, name: "index_categories_products_on_product_id_and_category_id"
  end
end
