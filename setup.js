const pool = require("./config/config");

const query = `
DROP TABLE IF EXISTS pokemons;

CREATE TABLE IF NOT EXISTS pokemons(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  type VARCHAR
); 
`;

pool.query(query, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log("create table success");
  }
  pool.end();
});