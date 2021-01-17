# frozen_string_literal: true

@categories.each do |category|
  json.set! category.id do
    json.id category.id
    json.name category.name
  end
end
