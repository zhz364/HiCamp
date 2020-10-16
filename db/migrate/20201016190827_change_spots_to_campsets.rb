class ChangeSpotsToCampsets < ActiveRecord::Migration[5.2]
  def change
    rename_table :spots, :campsets
  end
end
