const express = require("express");
const pokemonRoutes = require("./pokemon");

const router = express.Router();

router.use("/", pokemonRoutes);

module.exports = router;