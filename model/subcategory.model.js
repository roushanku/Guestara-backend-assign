import mongoose from "mongoose";
const SubcategorySchema = new mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
      image: { type: String },
      description: { type: String },
      tax_applicable: { type: Boolean, default: false },
      tax: { type: Number, default: 0 },
    },
    { timestamps: true }
  );
  
  // Indexing for faster queries
  SubcategorySchema.index({ name: 1 });
  SubcategorySchema.index({ category_id: 1 });
  
  const Subcategory = mongoose.model("Subcategory", SubcategorySchema);
  export default Subcategory;
  