class CreateSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :spots do |t|
      t.string :title, null:false
      t.string :type, null:false
      t.string :img_url, null:false
      t.integer :host_id, null:false
      t.integer :price, null:false
      t.integer :capacity, null:false
      t.float :longitude, null:false
      t.float :latitude, null:false
      t.text :address, null:false
      t.text :description, null:false
    
      t.timestamps
    end
    add_index :spots, :host_id
    add_index :spots, :price
    add_index :spots, :type
    add_index :spots, :title
    
  end
end
