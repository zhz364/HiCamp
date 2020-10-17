class ChangeTableSpotsColTypeToCampType < ActiveRecord::Migration[5.2]
  def change
    rename_column :spots, :type, :camp_type
  end
end
