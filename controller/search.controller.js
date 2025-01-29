import searchItemService from "../service/search.service.js";

async function searchItemController(req, res) {
  try {
    const { name } = req.query;

    if (!name) {
      return res
        .status(400)
        .json({ message: "Item name is required for search" });
    }
    return searchItemService(req, res);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export default searchItemController;
