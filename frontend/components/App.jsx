import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { 
        Switch, 
        Route,
        Link } from 'react-router-dom';

// session vvv
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './auth/signup_form_container';
import LogInFormContainer from './auth/login_form_container';
import ProductShowContainer from './products/show/product_show_container';

import EditProductFormContainer from './products/create_update/edit_product_form_container';
import CreateProductFormContainer from './products/create_update/create_product_form_container';

// products vvv
import ProductIndexContainer from './products/index/product_index_container';


export const App = (props) => {
  
  const currentUser = props.currentUser

  return (
    <div>
      <header>
        <Link to="/" className="logo"> Jewely </Link>
        <GreetingContainer />
      </header>
        {/* Note: this is here because we want to view differnet things based on what page we are on */}
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
            path="/products/:productId"
            component={ProductShowContainer}
          />

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
            path="/"
            component={ProductIndexContainer}
          />

          <Route
            component={ProductIndexContainer}
          />

          {/* ^^^ Note: User gets redirected to this if they don't enter an exisiting path.
                  This happens because there is no path parameter */}

          {/* Task: Make this a home container. It should be the body.
              We are going to use this to pass state and dispatch */}
          {/* question: Is it typical to have all these routes in here? */}
        </Switch>

    </div>
  )
};