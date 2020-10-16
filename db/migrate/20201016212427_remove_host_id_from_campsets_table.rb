class RemoveHostIdFromCampsetsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :campsets, :host_id
    remove_column :campsets, :camp_type
    remove_column :campsets, :price
    remove_column :campsets, :capacity
  end
end
