const express = require("express");
const router = express.Router();

const indexController = require("../controller/IndexController");

router.get("/", indexController.GetMessages);

router.get("/new", indexController.GetCreateMessages);

router.post("/new", indexController.PostCreateMessages);

module.exports = router;
