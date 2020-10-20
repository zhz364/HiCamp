json.extract! @spot, :name, :id, :camp_type, :img_url, :longitude, :latitude,:description, :price
@spot.photos.each_with_index do |photo,idx|
    # debugger
    json.photoUrl do  
      json.set! idx do
        json.photo url_for(photo)
      end  
    end 
  end
