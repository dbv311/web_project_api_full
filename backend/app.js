require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/aroundb");
const cors = require("cors");
const { requestLogger, errorLogger } = require("./middleware/logger");
const hasError = require("./middleware/hasError");

const { errors } = require("celebrate");

const app = express();

const { PORT = 3000 } = process.env;

app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(requestLogger);

const usersRoutes = require("./routes/users");

const cardsRoutes = require("./routes/cards");

app.use(usersRoutes);

app.use(cardsRoutes);

app.all("*", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});

app.use(errorLogger); // habilitar el logger de errores

app.use(errors());

app.use(hasError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});
