json.extract! @spot, :name, :id, :camp_type, :img_url, :longitude, :latitude,:description, :price,:capacity
@spot.photos.each_with_index do |photo,idx|
    json.photoUrl do  
      json.set! idx do
        json.photo url_for(photo)
      end  
    end 
  end
