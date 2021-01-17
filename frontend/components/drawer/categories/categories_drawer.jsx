import React from 'react';

export function CategoriesDrawer({categories}) {
  return (
    <div>
      {categories.map((category) => {
        return (
          <div
            className="drawer-categories__item"
            key={`drawer-category-${category.id}`}
          >
            <span role="img" aria-label="finger-pointing-right">
              👉&nbsp;
            </span>
            {category.name}
          </div>
        );
      })}
    </div>
  );
}
