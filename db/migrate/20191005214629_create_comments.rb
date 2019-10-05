class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.decimal :price, null: flase
      t.timestamps
    end
  end
end
