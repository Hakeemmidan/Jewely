class DropPhotoUrlColumnFromProductsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :photoUrl
  end
end
