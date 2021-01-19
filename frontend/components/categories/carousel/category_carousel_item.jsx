import React from 'react';

export function CategoriesCarouselItem({category}) {
  return (
    <div
      className="category-carousel-item-container"
      key={`category-carousel-${category.id}`}
    >
      <img
        className="category-carousel-item-img"
        src={category.photoUrl}
        alt={`${category.name}`}
      />
      {category.name}
    </div>
  );
}
