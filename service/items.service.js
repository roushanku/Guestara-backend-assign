import Category from '../model/category.model.js';
import Item from '../model/items.model.js';
import Subcategory from '../model/subcategory.model.js';
async function createItemsService(req , res) {
    try{
        const item = req.body;
        const newItem = new Item(item);
        await newItem.save();
        res.status(200).json({data : newItem , message: "Item created successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getAllItemsService(req , res) {
    try{
        const items = await Item.find().exec();
        res.status(200).json({data : items , message: "All items fetched successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getItemByCategoryService(req , res) {
    try{
        const categoryName = req.query.category;
        // console.log(categoryName);
        const category = await Category.find({name : categoryName}).exec();
        // console.log(category);
        if(!category || category.length === 0) {
            return res.status(400).json({message : "Category not found"});
        }

        const category_id = category[0]._id;
        const items = await Item.find({category_id : category_id}).exec();
        res.status(200).json({data : items , message: "Items fetched successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getItemBySubCatService(req , res) {
    try{
        const subCategoryName = req.query.subCategory;
        const subCategory = await Subcategory.find({name : subCategoryName}).exec();

        if(!subCategory || subCategory.length === 0) {
            return res.status(400).json({message : "SubCategory not found"});
        }

        const subCategory_id = subCategory[0]._id;
        // console.log(subCategory_id);
        const items = await Item.find({sub_category_id : subCategory_id}).exec();
        // console.log(items);

        if(!items || items.length === 0) {
            return res.status(400).json({message : "Items not found"});
        }

        res.status(200).json({data : items , message: "Items fetched successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function getItemsByNameService(req , res) {
    try{
        const itemName = req.query.item;
        const itemId = req.query.id;

        if(!itemName && !itemId) {
            return res.status(400).json({message : "Item name or Id is required"});
        }

        const items = await Item.find({name : itemName , _id : itemId}).exec();

        if(!items || items.length === 0) {
            return res.status(400).json({message : "Items not found"});
        }

        res.status(200).json({data : items , message: "Items fetched successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

async function editItemService(req , res) {
    try{
        const itemRequest = req.body;
        const itemId = req.params.id;

        const item = await Item.find({_id : itemId}).exec(); 

        if(!item || item.length === 0) {
            return res.status(400).json({message : "Item not found , Give Valid name"});
        }

        const newItem = {
            name : itemRequest.name ? itemRequest.name : item[0].name,
            category_id : itemRequest.category_id ? itemRequest.category_id : item[0].category_id,
            sub_category_id : itemRequest.sub_category_id ? itemRequest.sub_category_id : item[0].sub_category_id,
            image : itemRequest.image ? itemRequest.image : item[0].image,
            description : itemRequest.description ? itemRequest.description : item[0].description,
            tax_applicable : (itemRequest.tax_applicable !== null) ? itemRequest.tax_applicable : item[0].tax_applicable,
            tax : itemRequest.tax ? itemRequest.tax : item[0].tax,
            base_amount : itemRequest.base_amount ? itemRequest.base_amount : item[0].base_amount,
            discount : itemRequest.discount ? itemRequest.discount : item[0].discount,
            total_amount : itemRequest.total_amount ? itemRequest.total_amount : item[0].total_amount,
        }


        const updatedItem = await Item.findOneAndUpdate({_id : itemId} , newItem , {new : true}).exec();
        res.status(200).json({data : updatedItem , message: "Item updated successfully"});
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

export default createItemsService;
export { getAllItemsService , getItemByCategoryService , getItemBySubCatService , getItemsByNameService , editItemService};