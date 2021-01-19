import $ from 'jquery';

export const fetchCart = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/carts/${id}`,
  });
};
