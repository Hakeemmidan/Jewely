# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '#=> Seeding START'
puts '#### => Prepopulate Categories START'
CATEGORIES = ['bracelets', 'necklaces', 'rings', 'earrings', 'watches', 'cufflinks', 'other']

CATEGORIES.each do |ctg|
  if !Category.exists?(name: ctg)
    Category.create(name: ctg)
  end
end

puts '#### => Prepopulate Categories END'
puts '#=> Seeding END'
