class Review < ApplicationRecord
    validates :user_id, :spot_id, :body, presence: true 

    belongs_to :spot,
    foreign_key: :spot_id, 
    class_name: :Spot

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
