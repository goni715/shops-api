const  mongoose=require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        productName:{
            type:String,
            required:true,
            trim: true
        },
        slug:{
            type:String,
            required:true,
            unique: true,
            lowercase:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
        },
        categoryId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"categories",
            required: true,
        },
        image1: {
            type:String,
            default: "https://res.cloudinary.com/dwok2hmb7/image/upload/v1689258036/Social-Media/qavacc0ukfh1rqxmwdvv.jpg"
        }
    },
    { timestamps: true, versionKey:false},
);



const ProductModel=mongoose.model('products',ProductSchema);
module.exports=ProductModel

