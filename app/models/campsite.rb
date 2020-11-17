class Campsite < ApplicationRecord
    validates :title, uniqueness:true
    validates :title, :address, :longitude, :latitude, presence: true
    
    has_one_attached :photo

    has_many :spots,
        foreign_key: :campsite_id,
        class_name: :Spot
end
