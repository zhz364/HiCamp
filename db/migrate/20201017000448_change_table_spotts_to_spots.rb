class ChangeTableSpottsToSpots < ActiveRecord::Migration[5.2]
  def change
    rename_table :spotts, :spots
  end
end
