import React from 'react';
import {Link} from 'react-router-dom';

export function CategoriesDrawer({categories, closeDrawer}) {
  const categoryItems = [];
  let category;

  for (let id in categories) {
    category = categories[id];

    categoryItems.push(
      <Link
        onClick={() => closeDrawer('up')}
        key={`category-drawer-item-${id}-link`}
        to={`/categories/${category.id}`}
        style={{textDecoration: 'none'}}
      >
        <div className="drawer-categories__item">
          <span role="img" aria-label="finger-pointing-right">
            👉&nbsp;
          </span>
          {category.name}
        </div>
      </Link>
    );
  }

  return categoryItems;
}
