class AddExpiresAtToStatus < ActiveRecord::Migration[5.2]
  def change
    add_column :statuses, :expires_at, :datetime
    add_index :statuses, :expires_at
  end
end
