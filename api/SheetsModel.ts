const { Pool } = require("pg");
require("dotenv").config();
const myURI = process.env.PG_URI;

const pool = new Pool({
  connectionString: myURI,
});

module.exports = {
  query: (text: any, params: any, callback: any) => {
    return pool.query(text, params, callback);
  },
};