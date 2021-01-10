class RemovePrecisionConstraintFromCategoriesTimestamps < ActiveRecord::Migration[6.0]
  def change
    change_column :categories, :created_at, :datetime, null: false
    change_column :categories, :updated_at, :datetime, null: false
  end
end
