class RemoveAddindexSpots < ActiveRecord::Migration[5.2]
  def change
    remove_index :spots, :host_id
    remove_index :spots, :campsite_id
  end
end
