import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { flavor, brand, description, pints, pay, price, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
        [id]: {
          flavor: flavor,
          brand: brand,
          description: description,
          price: price,
          pints: pints,
          pay: pay,
          id: id
        }
      });
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.BUY_PINT:
      const newState1 = { ...state };
      const keg = newState1[id]
      return {
        pints: keg.pints - 1,
        pay: keg.pay + parseInt(keg.price)
      }

    default:
      return state;
  }
};

