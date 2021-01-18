# frozen_string_literal: true

@categories.each do |category|
  json.set! category.id do
    json.id category.id
    json.name category.name

    # attach category photo
    imgPath = "app/assets/images/category/#{category.name}.jpg"
    if (!category.photo.attached? && File.exists?(imgPath))
      file = File.open(imgPath)
      category.photo.attach(io: file, filename: "#{category.name}")
    end

    json.photoUrl url_for(category.photo)
  end
end
