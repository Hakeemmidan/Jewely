class AddPhotoUrlToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :photoUrl, :string 
  end
end
