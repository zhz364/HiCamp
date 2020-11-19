@spots.each do |spot|
    json.set! spot.id do
      json.extract! spot, :id,:campsite_id, :name, :camp_type, :longitude,:latitude,:price,:capacity,:img_url, :description, :state_location,:capacity
      spot.photos.each_with_index do |photo,idx|
        # debugger
        json.photoUrl do  
          json.set! idx do
            json.photo url_for(photo)
          end  
        end 
      end
    end
end