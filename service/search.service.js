import Item from "../model/items.model.js";

async function searchItemService(req, res) {
  try {
    // console.log("searchItemService called");
    const { name } = req.query;
    // Case-insensitive regex search

    const items = await Item.find({ name: { $regex: name, $options: "i" } });

    console.log("items", items);
    if (items.length === 0) {
      return res.status(404).json({ message: "No items found" });
    }

    res
      .status(200)
      .json({ data: items, message: "Items fetched successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default searchItemService;
