import productsRepository from '../data/productsRepository';

function product (event, context, callback) {
  const productId = event.pathParameters.id;
  const body = productsRepository.getProduct(productId);

  const response = {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(body)
  };

  callback(null, response);
};

export default product;
