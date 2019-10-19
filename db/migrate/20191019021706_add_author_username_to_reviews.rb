class AddAuthorUsernameToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :author_username, :string
  end
end
