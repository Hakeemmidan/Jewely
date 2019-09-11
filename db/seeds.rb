# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "#=> Seeding started"

User.create(username: 'demoUser', password: '12345678')

photo1 = File.open('/Users/hakimalmidan/Desktop/stock-photo-woman-s-jewelry-vintage-jewelry-background-beautiful-gold-tone-brooches-braceletes-necklaces-1061675699.jpg')
product1 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product1.photo.attach(io: photo1, filename: 'some image')
product1.save!

=begin
product2.photo.attach(io: photo1, filename: 'some image')
product2 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)

product3.photo.attach(io: photo1, filename: 'some image')
product3 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)

product4.photo.attach(io: photo1, filename: 'some image')
product4 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)

product5.photo.attach(io: photo1, filename: 'some image')
product5 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)

product6.photo.attach(io: photo1, filename: 'some image')
product6 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)

product7.photo.attach(io: photo1, filename: 'some image')
product7 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)

product8.photo.attach(io: photo1, filename: 'some image')
product8 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)

product9.photo.attach(io: photo1, filename: 'some image')
product9 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)

product10.photo.attach(io: photo1, filename: 'some image')
product10 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
=end



puts "#=> Seeding ended"