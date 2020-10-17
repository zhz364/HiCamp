class AddAddindexSpots < ActiveRecord::Migration[5.2]
  def change
    add_index :spots, :host_id
    add_index :spots, :campsite_id
  end

end
