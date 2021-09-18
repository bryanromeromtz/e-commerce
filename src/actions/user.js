import {
  SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.40,
        orderNumber: 'A565SS2FGHR',
        orderDate: new Date(),
        user: {
          userName: 'Bryan Faraone',
          creditCard: '-0000',
          shippingAddress: '1234 Guadalajara Jal'
        }
      },
      {
        _id: 1,
        total: 9.00,
        orderNumber: 't5S6SDDDFVVD',
        orderDate: new Date(),
        user: {
          userName: 'Troikadedra',
          creditCard: '-0000',
          shippingAddress: '1234 Guadalajara Jal'
        }
      },
      {
        _id: 2,
        total: 13.20,
        orderNumber: 'FG62211D4HR',
        orderDate: new Date(),
        user: {
          userName: 'Musgodelick',
          creditCard: '-0000',
          shippingAddress: '1234 Guadalajara Jal'
        }
      }, {
        _id: 3,
        total: 9.00,
        orderNumber: 'H5D4F45F5D5',
        orderDate: new Date(),
        user: {
          userName: 'Neo Fvtvre',
          creditCard: '-0000',
          shippingAddress: '1234 Guadalajara Jal'
        }
      }, {
        _id: 4,
        total: 9.00,
        orderNumber: 'T54DDVSAZX44',
        orderDate: new Date(),
        user: {
          userName: 'Daner Covar',
          creditCard: '-0000',
          shippingAddress: '1234 Guadalajara Jal'
        }
      }, {
        _id: 5,
        total: 11.50,
        orderNumber: 'A565SS2FGHR',
        orderDate: new Date(),
        user: {
          userName: 'Ashely Sowel',
          creditCard: '-0000',
          shippingAddress: '1234 Guadalajara Jal'
        }
      }, {
        _id: 6,
        total: 6.00,
        orderNumber: 'ERGVS4XD555',
        orderDate: new Date(),
        user: {
          userName: 'Melanie Guadalupe',
          creditCard: '-0000',
          shippingAddress: '1234 Guadalajara Jal'
        }
      },
      {
        _id: 7,
        total: 4.56,
        orderNumber: 'R5S456EEDFR5',
        orderDate: new Date(),
        user: {
          userName: 'Nataly Valenzuela',
          creditCard: '-0000',
          shippingAddress: '1234 Guadalajara Jal'
        }
      },
    ]
  })
}