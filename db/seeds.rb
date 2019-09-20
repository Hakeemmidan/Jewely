# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Product.delete_all

puts "#=> Seeding started"

user1 = User.new(username: 'demoUser', password: '12345678')
user1.save!
photo1 = File.open('/Users/hakimalmidan/Desktop/stock-photo-woman-s-jewelry-vintage-jewelry-background-beautiful-gold-tone-brooches-braceletes-necklaces-1061675699.jpg')
product1 = Product.create(
    title: 'some semi-long title that describes the product 1 lasdl wld ddl',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 199.97,
    seller_id: user1.id)
product1.photos.attach(io: photo1, filename: 'some image')
product1.save!

user2 = User.new(username: 'demoUser2', password: '22345678')
user2.save!
photo2 = File.open('/Users/hakimalmidan/Desktop/stock-photo-woman-s-jewelry-vintage-jewelry-background-beautiful-gold-tone-brooches-braceletes-necklaces-1061675699.jpg')
product2 = Product.create(
    title: 'some semi-long title that describes the product 2 wqdlkj qwl qwoi msn,m asdli', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    price: 299.97, 
    seller_id: user1.id)
product2.photos.attach(io: photo2, filename: 'some image')
product2.save!

user3 = User.new(username: 'demoUser3', password: '33345678')
user3.save!
photo3 = File.open('/Users/hakimalmidan/Desktop/stock-photo-woman-s-jewelry-vintage-jewelry-background-beautiful-gold-tone-brooches-braceletes-necklaces-1061675699.jpg')
product3 = Product.create(
    title: 'some semi-long title that describes the product 3 laks lkasdj asioq qwdl qd;l',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 399.97,
    seller_id: user1.id)
product3.photos.attach(io: photo3, filename: 'some image')
product3.save!

=begin

'/Users/hakimalmidan/Desktop/stock-photo-woman-s-jewelry-vintage-jewelry-background-beautiful-gold-tone-brooches-braceletes-necklaces-1061675699.jpg'


photo2 = File.open('/Users/hakimalmidan/Desktop/stock-photo-woman-s-jewelry-vintage-jewelry-background-beautiful-gold-tone-brooches-braceletes-necklaces-1061675699.jpg')
product2 = Product.create(title: 'some title2', description: 'some description2', price: 299.99, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product2.photo.attach(io: photo2, filename: 'someImg')
product2.save!
# question ) Why can't I attach the same image more than once
photo3 = File.open('/Users/hakimalmidan/Desktop/stock-photo-woman-s-jewelry-vintage-jewelry-background-beautiful-gold-tone-brooches-braceletes-necklaces-1061675699.jpg')
product3 = Product.create(title: 'some title3', description: 'some description3', price: 399.99, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product3.photo.attach(io: photo3, filename: 'someImg')
product3.save!

photo4 = File.open('/Users/hakimalmidan/Desktop/stock-photo-woman-s-jewelry-vintage-jewelry-background-beautiful-gold-tone-brooches-braceletes-necklaces-1061675699.jpg')
product4 = Product.create(title: 'some title4', description: 'some description4', price: 499.99, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product4.photo.attach(io: photo4, filename: 'someImg')
product4.save!

photo5 = File.open('/Users/hakimalmidan/Desktop/stock-photo-woman-s-jewelry-vintage-jewelry-background-beautiful-gold-tone-brooches-braceletes-necklaces-1061675699.jpg')
product5 = Product.create(title: 'some title5', description: 'some description5', price: 599.99, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product5.photo.attach(io: photo5, filename: 'someImg')
product5.save!
=end
=begin
product5 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product5.photo.attach(io: photo1, filename: 'some image')
product5.save!

product6 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product6.photo.attach(io: photo1, filename: 'some image')
product6.save!

product7 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product7.photo.attach(io: photo1, filename: 'some image')
product7.save!

product8 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product8.photo.attach(io: photo1, filename: 'some image')
product8.save!

product9 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product9.photo.attach(io: photo1, filename: 'some image')
product9.save!

product10 = Product.create(title: 'some title', description: 'some description', price: 299.97, quantity: 1, seller_id: 3,
cart_id: 1, review_id: 1)
product10.photo.attach(io: photo1, filename: 'some image')
product10.save!
=end
puts "#=> Seeding ended"