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


## Noticable Features / How to use
#### Product CRUD (Create, Read, Update, Delete)
##### Create
1. After signing up / logging in, go to "Sell on Jewely" on top right of header
2. Create product listing and submit

![](app/assets/gifs/create.gif)

##### Read
1. Go to home page
2. Click on any product listing from index to view its show page

![](app/assets/gifs/read.gif)

#### Update
[You must be signed in to do this]
1. Click on a product that you own 
2. Click on "Edit your product listing" in product show page
3. Edit as needed and submit

![](app/assets/gifs/update.gif)

#### Delete
1. After navigating to a product that you own, click on "Edit your product listing"
2. Click on "Delete product listing" (located at the bottom of product edit form)


![](app/assets/gifs/delete.gif)


--- 

#### window.localStorage Cart
The cart of this site is mainly run on `window.localStorage`. It is constructed of an array of arrays, each sub-array consisting of two items, an id, and a quantity.

Example localStorage cart: `"[[43,2], [75, 1]]"` This cart would be considered to have two items with ids 43, 75 and quantities 2, 1 respectively. 

Logically, when a user adds an item to their cart, then an array of id and the quantity (e.g. `[12, 2]`) of the item gets pushed to the parent array of localStorage cart. This is demonstrated in 'create' code snippet from 'CRUD' Noticable Feature.

This was done mainly to allow guest users to add items to their cart without needing to sign in, allowing for better user experience in my belief. Moreover, another reasoning for this is to not query the cart database for each addition or deletion of a product, which could lead to somewhat of slow performance.

---

#### Badge Auto Re-Rendering

---

#### Total Price Change On Quantity Update


## Noticeable Features
### Use of `window.localStorage`
#### Cart

### Todos
- Remove photo carousel from home page because it can be distracting
- Implement reviews
- Implement searching
- Make clickong on "Proceed to checkout" show Gihub and LinkedIn profiles (in a modal)
- Include Github and LinkedIn profiles at bottom left of site page