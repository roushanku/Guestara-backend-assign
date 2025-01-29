import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String },
    description: { type: String },
    tax_applicable: { type: Boolean, default: false },
    tax: { type: Number, default: 0 },
    tax_type: { type: String, enum: ["PERCENTAGE", "FIXED"], default: "PERCENTAGE" },
  },
  { timestamps: true }
);

// Indexing for faster queries
CategorySchema.index({ name: 1 });

const Category = mongoose.model("Category", CategorySchema);
export default Category;
