class Campset < ApplicationRecord
    validates :title, uniqueness:true
    validates :title, :address, :longitude, :latitude, presence: true
    
end
