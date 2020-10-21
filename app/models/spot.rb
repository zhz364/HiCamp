class Spot < ApplicationRecord
    validates :name, uniqueness:true
    validates :name, :longitude, :latitude, :camp_type, :img_url, :state_location,:host_id, :price, :capacity, presence: true
    
    has_many :bookings,
        foreign_key: :spot_id,
        class_name: :Booking,
        dependent: :destroy

    has_many_attached :photos
    
    
        
        
end
