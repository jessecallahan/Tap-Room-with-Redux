import * as c from './../actions/ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { flavor, brand, description, price, pints, pay, id } = keg;
  return {
    type: c.ADD_KEG,
    flavor: flavor,
    brand: brand,
    description: description,
    price: price,
    pints: pints,
    pay: pay,
    id: id
  }
}