const mongoose = require("mongoose");

const isEmail = require("validator/lib/isEmail");

const regExpLink =
  /^((http|https):\/\/)(w{3}\.)?[\w~:/?%#[\]@!$&'.()*+,;=]*\/#?/;

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => isEmail(v),
      message: "Formato de correo electrónico incorrecto",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return regExpLink.test(v);
      },
      message: "Formato incorrecto",
    },
  },
});

module.exports = mongoose.model("user", userSchema);
