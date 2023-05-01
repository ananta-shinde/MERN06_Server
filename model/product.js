const db = require("../conn");

const productSchema = new db.Schema({
    title : {type : String, required:true},
    description : {type : String, required:true},
    mrp : {type : Number, required:true},
    category : {type:String,required:true}   
})

const productModel = new db.model("product",productSchema);

module.exports = productModel;

