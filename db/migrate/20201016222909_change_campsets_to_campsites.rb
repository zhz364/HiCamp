class ChangeCampsetsToCampsites < ActiveRecord::Migration[5.2]
  def change
    rename_table :campsets, :campsites
  end
end
