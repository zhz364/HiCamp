class AddColumnStateToCampsites < ActiveRecord::Migration[5.2]
  def change
    add_column :campsites, :state, :string
  end
end
