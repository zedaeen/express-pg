const express = require("express");
const controller = require("../controllers/pokemon");

const router = express.Router();

router.get("/", controller.findAll);
router.post("/", controller.create);

module.exports = router;