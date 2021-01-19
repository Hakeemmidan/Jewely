import React from 'react';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import {Switch, Route} from 'react-router-dom';

// header vvv
import {Header} from './header/header';

// users vvv
import {UserShowContainer} from './users/user_show_container';

// home page
import {Home} from './home/home';

// session vvv
import {SignupFormContainer} from './auth/signup_form_container';
import {LoginFormContainer} from './auth/login_form_container';

// products vvv
import {ProductShowContainer} from './products/show/product_show_container';
import {ProductsCarouselContainer} from './products/carousel/products_carousel_container';
import {EditProductFormContainer} from './products/create_update/edit_product_form_container';
import {CreateProductFormContainer} from './products/create_update/create_product_form_container';

// categories vvv
import {CategoriesCarouselContainer} from './categories/carousel/categories_carousel_container';
import {CategoriesShow} from './categories/show/categories_show';

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
  props.fetchProducts();

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

        <Route
          exact
          path="/categories/:categoryId"
          component={CategoriesShow}
        />

        {/* Paths with wild cards at the end should always be put
              BELOW routes that have the same length */}

        <AuthRoute exact path="/login" component={LoginFormContainer} />

        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <Route exact path="/cart" component={CartShowContainer} />

        <Route path="/">
          <Home>
            <h2>Some products we love:</h2>
            <ProductsCarouselContainer />
            <br />
            <h2>Choose a category that suits you:</h2>
            <CategoriesCarouselContainer />
          </Home>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
