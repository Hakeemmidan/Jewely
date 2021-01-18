import React, {useState, useEffect} from 'react';
import {ProductsCarouselItem} from '../../products/carousel/product_carousel_item';
import {fetchCategory} from '../../../util/categories_api_util';

export function CategoriesShow(props) {
  const [categoryInfo, setCategoryInfo] = useState({});

  useEffect(() => {
    fetchCategory(props.match.params.categoryId).then((resProducts) =>
      setCategoryInfo(resProducts)
    );
  }, []);

  return (
    <div className="categories-show-container">
      <h2>{categoryInfo.name}:</h2>
      {categoryInfo.products.length ? (
        <div className="categories-show-products-container">
          {categoryInfo.products.map((product) => (
            <ProductsCarouselItem
              key={`categories-show-product-${product.id}`}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div>
          Looks like this category doesn't have any products at the moment{' '}
          <span role="img" aria-label="hatching chick">
            🐣
          </span>
          <br />
          Come back later!
        </div>
      )}
    </div>
  );
}
