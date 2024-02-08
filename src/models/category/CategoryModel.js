const  mongoose=require('mongoose');
const CategorySchema= new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: [true, "categoryName is required"],
            unique: true,
            index: true,
        }
    },
    { timestamps: true, versionKey:false},
);
const CategoryModel=mongoose.model('categories',CategorySchema);
module.exports=CategoryModel

