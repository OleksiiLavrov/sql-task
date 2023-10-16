const productsDAO = require("../dao/products");
class ProductsService {
   getAllProducts() {
      return productsDAO.getAllProducts();
   }
   getProductsByGroupID(id) {
      return productsDAO.getProductsByGroupID(id);
   }
}

module.exports = new ProductsService();
