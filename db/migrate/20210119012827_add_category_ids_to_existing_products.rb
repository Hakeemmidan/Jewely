class AddCategoryIdsToExistingProducts < ActiveRecord::Migration[6.0]
  def change
    Product.all.each do |prdct|
      if prdct.try(:category_id) == nil
        prdct.update(category_id: nil)
      end
    end
  end
end
