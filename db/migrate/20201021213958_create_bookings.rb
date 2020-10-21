class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null:false
      t.integer :spot_id, null:false
      t.date :checkin_date, null:false
      t.date :checkout_date, null:false
      t.integer :nums_guest, null:false
      t.integer :total_price, null:false

      t.timestamps
    end
    add_index :bookings, :user_id
    add_index :bookings, :spot_id

  end
end
