@campsites.each do |campsite|
    json.set! campsite.id do
      json.extract! campsite, :title,:longitude,:latitude,:img_url,:description,:address,:id
      json.photoUrl url_for(campsite.photo)
    end
end