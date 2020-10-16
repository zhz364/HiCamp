@campsets.each do |campset|
    json.set! campset.id do
      json.extract! campset, :title,:longitude,:latitude,:img_url
    end
end