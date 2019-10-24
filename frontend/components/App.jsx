import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { 
        Switch, 
        Route,
        Link } from 'react-router-dom';

// users vvv
import UserShowContainer from './users/user_show_container';

// session vvv
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './auth/signup_form_container';
import LogInFormContainer from './auth/login_form_container';

// products vvv
import ProductShowContainer from './products/show/product_show_container';
import ProductIndexContainer from './products/index/product_index_container';
import EditProductFormContainer from './products/create_update/edit_product_form_container';
import CreateProductFormContainer from './products/create_update/create_product_form_container';

// cart vvv 
import CartShowContainer from './carts/show/cart_show_container'; 

// modal vvv
import ModalContainer from './products/reviews/modal_container';

// reviews vvv
// import EditReviewFormContainer from './products/reviews/edit_review_form_container';

// footer vvv
import { Footer } from './footer/footer';

export class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="main-container-div">
        <header>
          <ModalContainer />
          <Link to="/" className="logo"> Jewely </Link>
          <GreetingContainer />
        </header>
          {/* Noted: this is here because we want to view differnet things based on what page we are on */}
          <Switch>
            <ProtectedRoute 
              exact
              path="/products/:productId/edit"
              component={EditProductFormContainer}
            />
  
            <ProtectedRoute
              exact
              path="/products/create"
              component={CreateProductFormContainer}
            />
{/* 
            <ProtectedRoute
              exact
              path="/reviews/:reviewId"
              component={ModalContainer}
            /> */}
  
            <Route
              exact
              path="/users/:userId"
              component={UserShowContainer}
            />
  
            <Route
              exact
              path="/products/:productId"
              component={ProductShowContainer}
            />
            {/* Noted: The path with the wild card at the end should always be put
                BELOW routes that have the same length */}
  
            <AuthRoute
              exact
              path="/login"
              component={LogInFormContainer}
            />
  
            <AuthRoute
              exact
              path="/signup"
              component={SignUpFormContainer}
            />
  
            <Route 
              exact
              path="/cart"
              component={CartShowContainer}
            />
  
            <Route
              path="/"
              component={ProductIndexContainer}
            />
  
            <Route
              component={ProductIndexContainer}
            />
            {/* ^^^ Noted: User gets redirected to this if they don't enter an exisiting path.
                    This happens because there is no path parameter */}
  
            {/* Task: Make this a home container. It should be the body.
                We are going to use this to pass state and dispatch */}
          </Switch>
          <Footer />
      </div>
    )
  }
};