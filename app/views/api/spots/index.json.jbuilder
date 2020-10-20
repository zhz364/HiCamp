@spots.each do |spot|
    json.set! spot.id do
      json.extract! spot, :id,:name, :camp_type, :longitude,:latitude,:price,:capacity,:img_url, :description, :state_location
      json.photoUrls spot.photos.map { |file| url_for(file) }
    end
end