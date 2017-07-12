// import productsData from './products.json';

// import lowdb from 'lowdb';
// import data from '../data/db.json';
// const db = lowdb();
// db.setState(data);
// const productsData = db.get('products');

import productsRepository from '../data/productsRepository';

function products (event, context, callback) {
  const body = productsRepository.getProducts();
  const response = {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(body)
  };

  callback(null, response);
};

export default products;
