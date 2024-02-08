const ProductModel = require("../../models/product/ProductModel");
const GetAllService = require("../../services/common/GetAllService");
const CreateProductService = require("../../services/product/CreateProductService");
const DeleteService = require("../../services/common/DeleteService");
const UpdateProductService = require("../../services/product/UpdateProductService");
const GetAllProductsService = require("../../services/product/GetAllProductsService");



exports.CreateProduct = async (req, res) =>{
    await CreateProductService(req,res,ProductModel);
}

exports.UpdateProduct = async (req, res) =>{
    await UpdateProductService(req,res,ProductModel);
}

exports.GetAllProduct=async(req,res)=>{
    const projection = {$project: {_id:1, productName:1, price:1, description:1, categoryId:1}}
    await GetAllProductsService(req,res,ProductModel)
}

exports.DeleteProduct = async (req, res) =>{
    await DeleteService(req,res,ProductModel);
}
