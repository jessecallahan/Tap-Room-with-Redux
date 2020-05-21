export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addTicket = (keg) => {
  const { flavor, brand, description, price, pints, pay, id } = keg;
  return {
    type: 'ADD_KEG',
    flavor: flavor,
    brand: brand,
    description: description,
    price: price,
    pints: pints,
    pay: pay,
    id: id
  }
}