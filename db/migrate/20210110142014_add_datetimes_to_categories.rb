class AddDatetimesToCategories < ActiveRecord::Migration[6.0]
  def change
    change_column_null :categories, :name, false
    add_timestamps(:categories, null: false)
  end
end
