import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {Link} from 'react-router-dom';
import {CategoriesCarouselItem} from './category_carousel_item';

export function CategoriesCarousel({categories}) {
  const categoryItems = [];
  let category;

  for (let id in categories) {
    category = categories[id];

    categoryItems.push(
      <Link
        key={`category-carousel-item-${id}-link`}
        to={`/categories/${category.id}`}
        style={{textDecoration: 'none'}}
      >
        <CategoriesCarouselItem category={category} />
      </Link>
    );
  }

  return (
    <ScrollMenu
      wheel={false}
      arrowLeft={<div className="scroll-menu-arrow">{' < '}</div>}
      arrowRight={<div className="scroll-menu-arrow">{' > '}</div>}
      data={categoryItems}
    />
  );
}
