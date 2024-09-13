const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/aroundb");

const { errors } = require("celebrate");

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.user = {
    _id: "66a993653c041c9313861d63",
  };

  next();
});

const usersRoutes = require("./routes/users");

const cardsRoutes = require("./routes/cards");

app.use(usersRoutes);

app.use(cardsRoutes);

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.use(errors());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
