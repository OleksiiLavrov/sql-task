const express = require("express");
const productsController = require("../controller/products");
const groupsController = require("../controller/groups");

const router = express.Router();
router.get("/products", productsController.getAllProducts);
router.get("/products/:id", productsController.getProductsByGroupID);
router.get("/groups", groupsController.getAllGroups);
router.get("/groups/:id", groupsController.getGroupsByID);
module.exports = router;
