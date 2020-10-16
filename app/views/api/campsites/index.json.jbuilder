@campsites.each do |campsite|
    json.set! campsite.id do
      json.extract! campsite, :title,:longitude,:latitude,:img_url
    end
end