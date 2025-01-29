import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", default: null }, // If item belongs directly to a category
    sub_category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory", default: null }, // If item belongs to a subcategory
    image: { type: String },
    description: { type: String },
    tax_applicable: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    base_amount: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    total_amount: { type: Number, required: true },
  },
  { timestamps: true }
);

// Ensuring fast lookup for both category-based and subcategory-based queries
ItemSchema.index({ name: "text" }); 
ItemSchema.index({ category_id: 1 }); 
ItemSchema.index({ sub_category_id: 1 }); 

const Item = mongoose.model("Item", ItemSchema);
export default Item;
