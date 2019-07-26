json.array! @benches do |bench|
   #  json.partial! 'api/guests/guest', bench: bench
    json.extract! bench, :description, :lat, :lng
end

# json.extract! guest, :name, :age, :favorite_color