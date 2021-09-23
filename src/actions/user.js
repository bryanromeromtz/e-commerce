import {
  SET_USER_PURCHASES,
  SET_PURCHASE_DETAIL,
} from './types';

export function setPurchaseDetail(_id) {
  return ({
    type: SET_PURCHASE_DETAIL,
    payload: _id
  })
}

export function fetchUserPurchases() {
  return ({
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.40,
        orderNumber: 'A565SS2FGHR',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Bryan Faraone',
          shippingAddress: '1234 Guadalajara Jal'
        }
      },
      {
        _id: 1,
        total: 9.00,
        orderNumber: 't5S6SDDDFVVD',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Troikadedra',
          shippingAddress: '1234 Guadalajara Jal'
        }
      },
      {
        _id: 2,
        total: 13.20,
        orderNumber: 'FG62211D4HR',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Musgodelick',
          shippingAddress: '1234 Guadalajara Jal'
        }
      }, {
        _id: 3,
        total: 9.00,
        orderNumber: 'H5D4F45F5D5',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Neo Fvtvre',
          shippingAddress: '1234 Guadalajara Jal'
        }
      }, {
        _id: 4,
        total: 9.00,
        orderNumber: 'T54DDVSAZX44',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Daner Covar',
          shippingAddress: '1234 Guadalajara Jal'
        }
      }, {
        _id: 5,
        total: 11.50,
        orderNumber: 'A565SS2FGHR',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Ashely Sowel',
          shippingAddress: '1234 Guadalajara Jal'
        }
      }, {
        _id: 6,
        total: 6.00,
        orderNumber: 'ERGVS4XD555',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Melanie Guadalupe',
          shippingAddress: '1234 Guadalajara Jal'
        }
      },
      {
        _id: 7,
        total: 4.56,
        orderNumber: 'R5S456EEDFR5',
        orderDate: new Date().toDateString(),
        creditCard: '-0000',
        user: {
          name: 'Nataly',
          shippingAddress: '1234 Guadalajara Jal'
        }
      },
    ]
  })
}