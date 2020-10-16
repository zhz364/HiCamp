@campsets.each do |camp|
    json.set! camp.id do
      json.extract! camp, :title,:longitude,:latitude,:img_url
    end
end