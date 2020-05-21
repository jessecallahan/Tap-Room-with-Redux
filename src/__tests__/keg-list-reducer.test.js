import kegListReducer from './../reducers/keg-list-reducer.js';

describe('kegListReducer', () => {

  let action;
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

  test('Should successfully add new ticket data to masterTicketList', () => {
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
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

});