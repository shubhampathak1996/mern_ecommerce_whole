const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware/Index");


const { addCategory, getCategory } = require("../controller/category");

const router = express.Router();
router.post("/category/create", requireSignin, adminMiddleware, addCategory);
router.get("/category/getcategory", getCategory);

module.exports = router;
