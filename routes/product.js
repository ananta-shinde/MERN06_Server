const express = require("express");
const router = express.Router();
const productController = require("../controller/product")

router.get("/", productController.getProductList)
router.get("/:id", productController.getProductById)
router.put("/:id", productController.updateProductById)
router.post("/", productController.createProduct)
router.delete("/", productController.deleteProductById)

module.exports = router;