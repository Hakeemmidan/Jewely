import $ from 'jquery';

export const fetchCategories = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/categories',
  });
};
