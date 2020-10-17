@spots.each do |spot|
    json.set! spot.id do
      json.extract! spot, :name, :camp_type, :longitude,:latitude,:price,:capacity,:img_url, :description
    end
end