const mongoose = require("mongoose");


const GetProductService = async (req, res, ProductModel) => {
  try{
      let id =req.params.id;
      const ObjectId = mongoose.Types.ObjectId;
      let QueryObject = {_id: new ObjectId(id)};

      const data = await ProductModel.aggregate([
          {$match: QueryObject},
          {$lookup: {from: "categories", localField: "categoryId", foreignField: "_id", as: "Category"}},
          {$project:{_id:1, productName:1, slug:1, description:1, price:1, quantity:1, image1:1, categoryId:1,categoryName:{$first:"$Category.categoryName"}, createdAt:1, updatedAt:1,}}
      ]);

      res.status(200).json({message: "success", data: data[0]});
  }
  catch(error){
      res.status(500).json({message: "error", data: error.toString()});
  }
}

module.exports=GetProductService