const categoryModel = require("../model/category")

async function getAllCategories(req,res)
{
     const categories = await categoryModel.find({})
     res.send(categories);
}
async function createCategory(req,res)
{
    const newCategory = new categoryModel(req.body)
    newCategory.save()
     res.send(newCategory);
}

module.exports = {getAllCategories,createCategory}