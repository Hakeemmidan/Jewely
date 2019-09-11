class DeleteReviewIdFromProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :review_id
  end
end
