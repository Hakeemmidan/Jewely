import React from 'react';

export function Home({children}) {
  return (
    <div>
      <h2 className="product_index_catchphrase">
        If it's shiny, custom, or fancy, it's on Jewely
      </h2>
      <div className="product-index-home-image-container">
        <img
          alt="Jewely home page"
          className="product-index-home-image"
          src="https://images.unsplash.com/photo-1508801283163-8e6e3090b523?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        ></img>
        <div className="product-index-home-image-text">
          Jewelry shines brighter <br /> when it's custom
        </div>
      </div>

      {children}

      <div className="products-index-what-is-jewely-container">
        <img
          className="products-index-what-is-jewely-img"
          src={window.whatIsJewely}
          alt="whatIsJewelyImg"
        />
      </div>
    </div>
  );
}
