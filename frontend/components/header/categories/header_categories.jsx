import React from 'react';
import {Link} from 'react-router-dom';

export function HeaderCategories({categories}) {
  const categoryItems = [];
  let category;

  for (let id in categories) {
    category = categories[id];

    categoryItems.push(
      <Link
        key={`category-header-item-${id}-link`}
        to={`/categories/${category.id}`}
        style={{textDecoration: 'none'}}
      >
        <div
          className="header-categories__item"
          key={`header-category-${category.id}`}
        >
          {category.name}
        </div>
      </Link>
    );
  }

  return categoryItems;
}
