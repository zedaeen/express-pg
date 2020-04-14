const Model = require("../models/Pokemon");

class Controller {
  static findAll(req, res) {
    Model.findAll((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.render("home", { pokemons: data });
      }
    });
  }

  static create(req, res) {
    const { name, type } = req.body;
    const newPokemon = { name, type };
    Model.create(newPokemon, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.redirect("/");
      }
    });
  }
}

module.exports = Controller;