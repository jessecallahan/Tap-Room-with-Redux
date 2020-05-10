import { v4 } from 'uuid';

const masterKegList = [
  {
    brand: 'Jimbo\'s',
    flavor: 'Root Beer',
    description: 'Good Ol\' Fashioned Root Beer',
    price: 4.00,
    pints: 100,
    pay: 0,
    id: v4()
  },
  {
    brand: 'Rick\'s',
    flavor: 'Cola',
    description: 'Classic Cola Taste',
    price: 3.00,
    pints: 100,
    pay: 0,
    id: v4()
  },
  {
    brand: 'Cindy\'s',
    flavor: 'Lemon Lime Soda',
    description: 'Great Twist of Lemon & Lime',
    price: 2.00,
    pints: 100,
    pay: 0,
    id: v4()
  }
];

export function kegFakeService() {
  return masterKegList;
}