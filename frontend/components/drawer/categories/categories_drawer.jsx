import React from 'react';

export function CategoriesDrawer({categories}) {
  const categoryItems = [];
  let category;

  for (let id in categories) {
    category = categories[id];

    categoryItems.push(
      <div className="drawer-categories__item" key={`drawer-category-${id}`}>
        <span role="img" aria-label="finger-pointing-right">
          👉&nbsp;
        </span>
        {category.name}
      </div>
    );
  }

  return categoryItems;
}
