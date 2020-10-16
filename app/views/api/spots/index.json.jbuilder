@.each do |spot|
    json.set! spot.id do
      json.extract! spot, :title, :camp_type, :longitude,:latitude,:price,:capacity,:img_url
    end
end