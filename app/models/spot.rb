class Spot < ApplicationRecord
    validates :name, uniqueness:true
    validates :name, :longitude, :latitude, :camp_type, :img_url, :state_location,:host_id, :price, :capacity, presence: true
    
    has_many :bookings,
        foreign_key: :spot_id,
        class_name: :Booking,
        dependent: :destroy

    belongs_to :campsite,
        foreign_key: :campsite_id,
        class_name: :Campsite

    has_many_attached :photos
    
    def self.find_by_campsiteId(campsiteId)
        spots = Spot.find_by(campsite_id: campsiteId)
    end
        
        
end
