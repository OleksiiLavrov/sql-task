const db = require("../db/db");

class ProductsDAO {
   async getAllProducts() {
      return await db("products");
   }
   async getProductsByGroupID(id) {
      const { rows } = await db.raw(
         `WITH RECURSIVE GroupHierarchy AS (
         SELECT id, id_parent, name
         FROM groups
         WHERE id = ?
         
         UNION ALL
         
         SELECT g.id, g.id_parent, g.name
         FROM groups g
         INNER JOIN GroupHierarchy gh ON g.id_parent = gh.id
      )
      SELECT p.id, p.id_group, p.name
      FROM products p
      WHERE p.id_group IN (SELECT id FROM GroupHierarchy);`,
         [id]
      );
      return rows;
   }
}
module.exports = new ProductsDAO();
