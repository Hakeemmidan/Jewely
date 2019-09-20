# Jewely

Welcome to Jewely! An Etsy clone that specializes in allowing users to buy and sell jewelry!

[Jewely live link](https://jewely-fsp.herokuapp.com/#/)

## Technology Stack

This site was built on a Rails backend, a Postgress SQL database, and a React/Redux frontend.

## Libraries
One of the main libraries/packages used for this site is [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel). 

It was mainly used to render images in a carousel in the products index page and product show page. 

## Configuration
### Installation
```ruby
bundle install
```
```javascript
npm install
```
### To run
```ruby
rails s
```
```javascript
npm start
```

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
