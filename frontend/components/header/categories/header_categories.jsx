import React, {useEffect} from 'react';

export function HeaderCategories(props) {
  let categories = props.categories;
  useEffect(() => props.fetchCategories(), []);

  return (
    <>
      {categories.map((category) => {
        return (
          <div
            className="header-categories__item"
            key={`header-category-${category.id}`}
          >
            {category.name}
          </div>
        );
      })}
    </>
  );
}
