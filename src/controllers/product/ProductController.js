const ProductModel = require("../../models/product/ProductModel");
const CreateProductService = require("../../services/product/CreateProductService");
const DeleteService = require("../../services/common/DeleteService");
const UpdateProductService = require("../../services/product/UpdateProductService");
const GetAllProductsService = require("../../services/product/GetAllProductsService");
const GetProductService = require("../../services/product/GetProductService");



exports.CreateProduct = async (req, res) =>{
    await CreateProductService(req,res,ProductModel);
}

exports.UpdateProduct = async (req, res) =>{
    await UpdateProductService(req,res,ProductModel);
}

exports.GetAllProduct=async(req,res)=>{
    await GetAllProductsService(req,res,ProductModel)
}

exports.GetProduct=async(req,res)=>{
    await GetProductService(req,res,ProductModel)
}

exports.DeleteProduct = async (req, res) =>{
    await DeleteService(req,res,ProductModel);
}
