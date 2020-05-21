import kegListReducer from '../../reducers/keg-list-reducer.js';

describe('kegListReducer', () => {
  let action;
  const currentState = {
    1: {
      brand: 'Jimbo\'s',
      flavor: 'Root Beer',
      description: 'Good Ol\' Fashioned Root Beer',
      price: 4.00,
      pints: 100,
      pay: 0,
      id: 1,
    },
    2: {
      brand: 'Rick\'s',
      flavor: 'Cola',
      description: 'Classic Cola Taste',
      price: 3.00,
      pints: 100,
      pay: 0,
      id: 2
    }
  }


  const kegData = {
    brand: 'Jimbo\'s',
    flavor: 'Root Beer',
    description: 'Good Ol\' Fashioned Root Beer',
    price: 4.00,
    pints: 100,
    pay: 0,
    id: 1,
  }



  describe('kegListReducer', () => {
    test('Should return default state if there is no action type passed into the reducer', () => {
      expect(kegListReducer({}, { type: null })).toEqual({});
    });
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { brand, flavor, description, price, pints, pay, id } = kegData;
    action = {
      type: 'ADD_KEG',
      brand: brand,
      flavor: flavor,
      description: description,
      price: price,
      pints: pints,
      pay: pay,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        brand: brand,
        flavor: flavor,
        description: description,
        price: price,
        pints: pints,
        pay: pay,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        brand: 'Rick\'s',
        flavor: 'Cola',
        description: 'Classic Cola Taste',
        price: 3.00,
        pints: 100,
        pay: 0,
        id: 2
      }
    });
  });
});

