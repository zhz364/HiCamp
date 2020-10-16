@campsets.each do |camp|
    json.set! camp.id do
      json.extract! camp, :title, :camp_type, :longitude,:latitude,:price,:capacity,:img_url
    end
end