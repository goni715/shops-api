const express =require('express');
const ProductController = require("../controllers/product/ProductController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const IsAdmin = require("../middlewares/IsAdmin");


const router = express.Router();


router.post("/create-product", AuthVerifyMiddleware, ProductController.CreateProduct);
router.put("/update-product/:id", AuthVerifyMiddleware, ProductController.UpdateProduct);
router.delete("/delete-product/:id", AuthVerifyMiddleware, ProductController.DeleteProduct);
router.get("/get-product", ProductController.GetAllProduct);
router.get("/get-all-product", ProductController.GetAllProduct);



module.exports=router;

