class AddIndexOnUsernameAndSessionTokenUserColumns < ActiveRecord::Migration[6.0]
  def change
    add_index :users, [:username, :session_token], unique: true
  end
end
