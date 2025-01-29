import Category from "../model/category.model.js";
async function createCategoryService(req , res) {
    try{
        const categorySchema = req.body;

        const category = new Category(categorySchema);
        await category.save();
        return res.status(200).json({data : category , message: "Category created successfully"});
    }
    catch(error) {
        return res.status(500).json({message: error.message});
    }
}

async function getAllCategoryService(req , res) {
    try{
        const category = await Category.find({}).exec();

        return res.status(200).json({data : category , message: "Category fetched successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getCategoryByNameService(req , res) {
    try{
        const categoryName = req.query.category;
        const categoryId = req.query.id;
        // console.log(categoryName);

        if(!categoryName && !categoryId) {
            return res.status(400).json({message: "Category Name or Id is required"});
        }
        const category = await Category.find({name : categoryName , _id : categoryId}).exec();
        res.status(200).json({data : category , message: "Category By Name fetched successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function editCategoryService(req , res) {
    try{
        const categoryRequest = req.body;
        const categoryId = req.params.id;

        const category = await Category.findOne({_id : categoryId}).exec();

        if(!category || category.length === 0) {
            return res.status(404).json({message: "Category not found"});
        }

        console.log(categoryRequest);

        const categorySchema = {
            name : categoryRequest.name ? categoryRequest.name : category.name,
            image : categoryRequest.image ? categoryRequest.image : category.image,
            description : categoryRequest.description ? categoryRequest.description : category.description,
            tax_applicable : (categoryRequest.tax_applicable !== null) ? categoryRequest.tax_applicable : category.tax_applicable,
            tax : categoryRequest.tax ? categoryRequest.tax : category.tax,
            tax_type : categoryRequest.tax_type ? categoryRequest.tax_type : category.tax_type,
        }

        // console.log(categorySchema);

        const newCategory = await Category.findOneAndUpdate({_id  : categoryId} , categorySchema , {new: true}).exec();
        res.status(200).json({data : newCategory , message: "Category updated successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

export default createCategoryService;
export { getAllCategoryService , getCategoryByNameService , editCategoryService};