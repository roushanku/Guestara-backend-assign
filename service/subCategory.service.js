import Category from '../model/category.model.js';
import Subcategory from '../model/subcategory.model.js'
async function createSubCategoryService(req , res) {
    try{
        const subCategory = req.body;
        const newSubCategory = await Subcategory(subCategory);
        await newSubCategory.save();

        res.status(200).json({data : newSubCategory , message: "SubCategory created successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllSubCategoryService(req , res) {
    try{
        const subCategory = await Subcategory.find();
        res.status(200).json({data : subCategory , message: "All SubCategory fetched successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllSubCategoryByCategoryService(req , res) {
    try{
        const categoryName = req.query.category;
        // console.log(categoryName);
        const category = await Category.find({name : categoryName});
        // console.log(category);

        if(!category || category.length === 0) {
            return res.status(404).json({message: "Category not found"});
        }
        const category_id = category[0]._id;
        const subCategory = await Subcategory.find({category_id : category_id});
        
        res.status(200).json({data : subCategory , message: "All SubCategory Under Category fetched successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllSubCategoryByNameService(req , res) {
    try{
        const subCategoryName = req.query.subCategory;
        const subCategoryId = req.query.subCategoryId;

        if(!subCategoryName && !subCategoryId) {
            return res.status(400).json({message: "SubCategory Name or SubCategory Id is required"});
        }

        const subCategory = await Subcategory.find({name : subCategoryName , _id : subCategoryId});
        res.status(200).json({data : subCategory , message: "All SubCategory By Name fetched successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function editSubCategoryService(req , res) {
    try{
        const subCategoryRequest = req.body;
        const subCatId = req.params.id;

        const subCategory = await Subcategory.findOne({_id : subCatId}).exec();

        if(!subCategory || subCategory.length === 0) {
            return res.status(404).json({message: "SubCategory not found By Name , Give Valid SubCategory Name"});
        }

        const newSubCategory = {
            name : subCategoryRequest.name ? subCategoryRequest.name : subCategory.name,
            category_id : subCategoryRequest.category_id ? subCategoryRequest.category_id : subCategory.category_id,
            image : subCategoryRequest.image ? subCategoryRequest.image : subCategory.image,
            description : subCategoryRequest.description ? subCategoryRequest.description : subCategory.description,
            tax_applicable : (subCategoryRequest.tax_applicable !== null) ? subCategoryRequest.tax_applicable : subCategory.tax_applicable,
            tax : subCategoryRequest.tax ? subCategoryRequest.tax : subCategory.tax,
        }

        const updatedSubCategory = await Subcategory.findOneAndUpdate({_id : subCatId} , newSubCategory , {new: true}).exec();
        
        res.status(200).json({data : updatedSubCategory , message: "SubCategory updated successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

export default createSubCategoryService;
export {getAllSubCategoryService , getAllSubCategoryByCategoryService , getAllSubCategoryByNameService , editSubCategoryService};