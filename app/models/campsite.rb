class Campsite < ApplicationRecord
    validates :title, uniqueness:true
    validates :title, :address, :longitude, :latitude, presence: true
    
    has_one_attached :photo
end
