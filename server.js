require("dotenv").config({ path: "./.env" });
const express = require("express");
const routes = require("./routes/auth");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", routes);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on("errors", (error, promise) => {
    console.log(error);
    server.close(()=> process.exit(1));
})
