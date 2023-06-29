const express = require("express");
const routes = require("../routes")
const database = require('./database/sqlite');
const app = express();

app.use(express.json());
app.use(routes);
const PORT = 3333;

database();

app.listen(PORT, () =>console.log(`Server is running on PORT ${PORT}`));



//npx knex init