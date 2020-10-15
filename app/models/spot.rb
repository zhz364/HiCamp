class Spot < ApplicationRecord
    validates :title, uniqueness:true
    validates :title, :host_id, :price, :address, :camp_type, :longitude, :latitude, :capacity, presence: true


    
end
