const pool = require("../config/config");

class Pokemon {
  constructor(pokemon) {
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.type = pokemon.type;
  }
  
  static findAll(callback) {
    const query = 'SELECT * FROM pokemons;'
    pool.query(query, (err, result) => {
      if (err) {
        callback(err.message, null)
      } else {
        const pokemons = [];
        for (let i = 0; i < result.rows.length; i++) {
          pokemons.push(new Pokemon(result.rows[i]));
        }
        callback(null, pokemons);
      }
    })
  }

  static create(pokemon, callback) {
    const query = {
      text: 'INSERT INTO pokemons (name, type) VALUES ($1, $2)',
      values: Object.values(pokemon)
    }
    pool.query(query, (err, result) => {
      if (err) {
        callback(err.message);
      } else {
        callback(null);
      }
    })
  }
}

module.exports = Pokemon;