class Spot < ApplicationRecord
    validates :name, :campsite_id,:host_id, uniqueness:true
    validates :name, :address, :longitude, :latitude, :camp_type, :img_url, :state_location,:host_id, presence: true
end
