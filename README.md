# Jewely

[Jewely live](https://jewely-fsp.herokuapp.com/#/)

## Background and Overview
Jewely is an Etsy inspired site that specializes in allowing users to buy and sell jewelry. It works like most e-commerce stores, except in this one, you could be a vendor. A user must sign up or sign in order to be able to sell.

## Technologies
### Stack
- Backend
    - postgreSQL
    - Ruby on Rails
- Frontend
    - React / Redux
### Noticable Gems
- `bcrypt`
    - Hash passwords before they're stored in database
- `jbuilder`
    - Extract a JSON object from backend and pass it on to frontend
- `aws-sdk-s3`
    - Required for the use of AWS S3 in Rails applications
- `sass-rails`
    - Sass adapter for rails pipeline
        - All styling in this project was done through Sass
### Noticable Dependencies
- `@babel/core`, `@babel/preset-env`, `@babel/preset-react`, `babel-loader`
    - Converts ES5+ JavaScript code into more compaitable versions
- `react-responsive-carousel`
    - Displays images in a photo carousel
        - Used in product show pages and site landing page
- `redux-thunk`
    - Thunk middleware for Redux
- `webpack`, `webpack-cli`
    - Module bundler


## Setup
### Installation
In terminal:
1. `bundle install` to install Ruby gems
2. `npm install` to install JavaScript dependencies

In computer:

3. Make sure that PostgreSQL is running, if not, start it

In terminal:

4. `rails db:setup` to setup PostgreSQL database
5. `rails s` to start Rails server
6. `npm start` to start Webpack module bundler

In browser:

7. navigate to `http://localhost:3000` to view application


## Noticable Features
#### Product CRUD (Create, Read, Update, Delete)
#### Window.localStorage Cart
#### Badge Auto Re-Rendering
#### Total Price Change On Quantity Update


## Noticeable Features
### Use of `window.localStorage`
#### Cart
The cart of this site is mainly run on `window.localStorage`. It is constructed of an array of arrays, each sub-array consisting of two items, an id, and a quantity.

Example localStorage cart: `"[[43,2], [75, 1]]"` This cart would be considered to have two items with ids 43, 75 and quantities 2, 1 respectively. 

Logically, when a user adds an item to their cart, then an array of id and the quantity (e.g. `[12, 2]`) of the item gets pushed to the parent array of localStorage cart.

This was done mainly to allow guest users to add items to their cart without needing to sign in, allowing for better user experience in my belief. Moreover, another reasoning for this is to not query the cart database for each addition or deletion of a product, which could lead to somewhat of slow performance.

#### Forms
The localStorage is also used to store product form data. That is so when a user refreshes the page, they do not lose the information that they had typed for a specific product.



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
