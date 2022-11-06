const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes/auth");
var bodyParser = require('body-parser');

const app = express();

//Third-party middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

dotenv.config();

app.use(express.json());

app.use("/api/auth", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
