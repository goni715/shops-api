const CategoryModel = require("../../models/category/CategoryModel");
const CreateService = require("../../services/common/CreateService");
const UpdateService = require("../../services/common/UpdateService");
const GetAllService = require("../../services/common/GetAllService");
const mongoose = require("mongoose");
const DeleteService = require("../../services/common/DeleteService");
const CheckAssociateService = require("../../services/common/CheckAssociateService");
const ProductModel = require("../../models/product/ProductModel");



exports.CreateCategory = async (req, res) =>{
    await CreateService(req,res,CategoryModel);
}

exports.UpdateCategory = async (req, res) =>{
    await UpdateService(req,res,CategoryModel);
}

exports.GetAllCategory=async(req,res)=>{
    const projection = {$project: {_id:1, categoryName:1}}
    await GetAllService(req,res,CategoryModel, projection)
}


exports.DeleteCategory=async (req, res) => {
    let deleteId=req.params.id;
    const ObjectId = mongoose.Types.ObjectId;
    let CheckAssociate = await CheckAssociateService(req, res,{categoryId: new ObjectId(deleteId)},ProductModel);
    if(CheckAssociate){
        res.status(403).json({message:"associate", data: "associated with Product"})
    }else{
        await DeleteService(req, res, CategoryModel);
    }
}
