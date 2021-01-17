import React from 'react';

export function HeaderCategories({categories}) {
  const categoryItems = [];
  let category;

  for (let id in categories) {
    category = categories[id];

    categoryItems.push(
      <div
        className="header-categories__item"
        key={`header-category-${category.id}`}
      >
        {category.name}
      </div>
    );
  }

  return categoryItems;
}
