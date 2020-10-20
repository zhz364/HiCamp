class Spot < ApplicationRecord
    validates :name, uniqueness:true
    validates :name, :longitude, :latitude, :camp_type, :img_url, :state_location,:host_id, :price, :capacity, presence: true

    
end
