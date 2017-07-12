import lowdb from 'lowdb';
import data from './data.json';

class productsRepository {

  constructor () {
    this.db = lowdb();
    this.db.setState(data);
  }

  getProducts() {
    return this.db.get('products').sortBy('details.name');
  }

  getProduct(id) {
    return this.db.get('products').find({ id });
  }

}


export default new productsRepository();
