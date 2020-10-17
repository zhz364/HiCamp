class CreateSpotts < ActiveRecord::Migration[5.2]
  def change
    create_table :spotts do |t|
      t.string :name, null:false
      t.string :type, null:false
      t.string :img_url, null:false
      t.string :state_location, null:false
      t.integer :host_id, null:false
      t.integer :campsite_id, null:false
      t.integer :price, null:false
      t.integer :capacity, null:false
      t.float :longitude, null:false
      t.float :latitude, null:false
      t.text :address
      t.text :description
    
      t.timestamps
    end
    add_index :spotts, :host_id, unique:true
    add_index :spotts, :campsite_id, unique:true
    add_index :spotts, :name, unique:true
    add_index :spotts, :price
    add_index :spotts, :longitude
    add_index :spotts, :latitude



  end
end
