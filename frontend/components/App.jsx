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
import ModalContainer from './modal/modal_container';

// reviews vvv
// import EditReviewFormContainer from './products/reviews/edit_review_form_container';

// filter vvv
import FilterFormContainer from './filter/filter_form_container';

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
          <div className="logo-and-search-bar">
            <Link to="/" className="logo"> Jewely </Link>
            <Switch>
              <Route
                exact
                path="/products/:productId/edit"
                component={FilterFormContainer}
              />

              <ProtectedRoute
                exact
                path="/products/create"
                component={FilterFormContainer}
              />

              <Route
                exact
                path="/users/:userId"
                component={FilterFormContainer}
              />

              <Route
                exact
                path="/products/:productId"
                component={FilterFormContainer}
              />

              <Route
                exact
                path="/cart"
                component={FilterFormContainer}
              />

              <Route
                exact
                path="/"
                component={FilterFormContainer}
              />
            </Switch>
          </div>
          <GreetingContainer />
        </header>

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
            {/* ^^^ User gets redirected to this if they don't enter an exisiting path.
                    This happens because there is no path parameter */}
          </Switch>
          <Footer />
      </div>
    )
  }
};