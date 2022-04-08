const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/routes.js");




var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

//Ici je met en place le port qui sera à l'écoute
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});