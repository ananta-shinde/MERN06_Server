const db = require("../conn");

const categorySchema = new db.Schema({
    title : String,
    description : String
})

const categoryModel = new db.model("category",categorySchema);

module.exports = categoryModel;