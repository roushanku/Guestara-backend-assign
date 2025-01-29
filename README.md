# Category, Subcategory & Items Management System

## 📌 Overview
This project provides a **REST API** for managing **categories, subcategories, and items** using **Node.js, Express, and MongoDB**. It includes functionalities for:

- **Creating, Reading, Updating, and Searching** categories, subcategories, and items.
- Items can belong **directly to a category** or to a **subcategory**.
- MongoDB with Mongoose is used for data storage.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **API Testing:** Postman
- **Package Manager:** npm

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/roushanku/Guestara-backend-assign.git
cd guestara
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```env
PORT=""
MONGO_URI=""
```

### 4️⃣ Run the Server
```sh
npm start
```

---

## 📜 API Endpoints

### 📌 **Category APIs**
#### ➤ Create Category
```http
POST /api/category/create
```
**Body:**
```json
{
    "name": "Beauty",
    "image": "https://example.com/electronics.jpg",
    "description": "All kinds of beauty.",
    "tax_applicable": true,
    "tax": 18,
    "tax_type": "PERCENTAGE"
}
```

#### ➤ Get All Categories
```http
GET /api/get/allCategory
```

#### ➤ Get Category by Name or ID
```http
GET /api/get/getCategoryByName?category=Fashion&&id=6795256c56864e1b4f626185
```
#### ➤ Edit category attributes

```http
PUT /api/edit/editCategory/6795256c56864e1b4f626185
```
**Body:**
```json
{
  "tax" : "24"
}
```
---

### 📌 **Subcategory APIs**
#### ➤ Create Subcategory
```http
POST /api/create/subcategory
```
**Body:**
```json
 {
    "name": "Laptops",
    "category_id": "65a0f6b3c9a5e456d1234567",
    "image": "https://example.com/laptops.jpg",
    "description": "Laptops from top brands.",
    "tax_applicable": true,
    "tax": 15
  }
```

#### ➤ Get All Subcategories Under Category
```http
GET /api/get/getSubCategoryByCategory?category=Fashion
```

#### ➤ Get All Subcategories By Name or Id
```http
GET /api/get/getAllSubCatByName?subCategory=Smartphos&&subCategoryId=67952759806b02ba72d91826
```

#### ➤ Edit Subcategory attributes

```http
PUT /api/edit/editSubCat/67952759806b02ba72d91826
```
**Body:**
```json
{
  "name" : "smapert Phone"
}
```
---

### 📌 **Item APIs**
#### ➤ Create Item
```http
POST /api/item/create
```
**Body:**
```json
{
  "name": "Gaming Chair",
  "sub_category_id": null,
  "category_id": "65a0f6b3c9a5e456d1234568",
  "image": "https://example.com/gamingchair.jpg",
  "description": "Ergonomic gaming chair with lumbar support.",
  "tax_applicable": false,
  "tax": 0,
  "base_amount": 250,
  "discount": 20,
  "total_amount": 230
}
```

#### ➤ Get All Items
```http
GET /api/get/getAllItems
```

#### ➤ Get all items under a category

```http
GET /api/get/getItemsByCategory?category=Fashion
```

#### ➤ Get all items under a SubCategory

```http
GET /api/get/getItemsBySubCategory?subCategory=Smartphos
```

#### ➤ Edit Item attributes
```http
PUT /api/edit/editItem/65a0f6b3c9a5e456d1234580
```
**Body:**
```json
{
  "total_amount" : "10000"
}
```

#### ➤ Search Item by Name
```http
GET /api/search/searchItem?name=iPhone 25
```

---

## 🏗 Database Schema
### **Category Model**
```javascript
{
  name: { type: String, required: true, unique: true },
  image: { type: String },
  description: { type: String },
  tax_applicable: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
  tax_type: { type: String, enum: ["PERCENTAGE", "FIXED"], default: "PERCENTAGE" },
},
{ timestamps: true }
```

### **Subcategory Model**
```javascript
{
  name: { type: String, required: true, unique: true },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  image: { type: String },
  description: { type: String },
  tax_applicable: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
},
{ timestamps: true }
```

### **Item Model**
```javascript
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
```

---

## 🔍 Features & Enhancements
- ✅ Indexing for **faster search** on item names.
- ✅ Items can belong **directly to a category** or a **subcategory**.
- ✅ **Error handling** for missing or invalid inputs.

---

## 📧 Contact
For any issues or improvements, feel free to reach out or create a pull request.

🚀 **Happy Coding!**

