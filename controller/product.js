const productModel = require("../model/product")

async function getProductList (req,res){
   const products =  await productModel.find({})
   res.send(products);
}
async function getProductById (req,res){
    const product =  await productModel.findById(req.params.id);
   res.send(product);
}

async function updateProductById (req,res){
    const product =  await productModel.findByIdAndUpdate(req.params.id,req.body);
    res.send(product)
}
const deleteProductById = (req,res)=>{

}
const createProduct = (req,res)=>{
      const product = new productModel(req.body);
      product.save()
      res.send(product)
}

module.exports = {getProductById,getProductList,updateProductById,deleteProductById,createProduct}
