import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Switch, Route} from 'react-router-dom';

// header vvv
import {Header} from './header/header';

// users vvv
import {UserShowContainer} from './users/user_show_container';

// session vvv
import {SignupFormContainer} from './auth/signup_form_container';
import {LoginFormContainer} from './auth/login_form_container';

// products vvv
import {ProductShowContainer} from './products/show/product_show_container';
import {ProductIndexContainer} from './products/index/product_index_container';
import {EditProductFormContainer} from './products/create_update/edit_product_form_container';
import {CreateProductFormContainer} from './products/create_update/create_product_form_container';

// cart vvv
import {CartShowContainer} from './carts/show/cart_show_container';

// hidden trigger-able components vvv
import {ModalContainer} from './modal/modal_container';
import {DrawerContainer} from './drawer/drawer_container';

// footer vvv
import {Footer} from './footer/footer';

export function App(props) {
  // prepopulate Redux state of app
  props.fetchCategories();

  return (
    <div className="main-container-div">
      {/* vvv hidden by default */}
      <ModalContainer />
      <DrawerContainer />

      <Header />

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

        <Route exact path="/users/:userId" component={UserShowContainer} />

        <Route
          exact
          path="/products/:productId"
          component={ProductShowContainer}
        />
        {/* Paths with wild cards at the end should always be put
              BELOW routes that have the same length */}

        <AuthRoute exact path="/login" component={LoginFormContainer} />

        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <Route exact path="/cart" component={CartShowContainer} />

        <Route path="/" component={ProductIndexContainer} />

        <Route component={ProductIndexContainer} />
        {/* ^^^ User gets redirected to this if they don't enter an exisiting path.
                  This happens because there is no path parameter */}
      </Switch>
      <Footer />
    </div>
  );
}
