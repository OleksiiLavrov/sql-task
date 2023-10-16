const productsService = require("../service/products");

class ProductsController {
   async getAllProducts(_, res) {
      try {
         const products = await productsService.getAllProducts();
         res.status(201).json(products);
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error.message });
      }
   }
   async getProductsByGroupID(req, res) {
      try {
         const { id } = req.params;
         const products = await productsService.getProductsByGroupID(id);
         res.status(201).json(products);
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error.message });
      }
   }
}
module.exports = new ProductsController();
