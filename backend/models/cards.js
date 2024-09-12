const mongoose = require("mongoose");

const regExpLink =
  /^((http|https):\/\/)(w{3}\.)?[\w~:/?%#[\]@!$&'.()*+,;=]*\/#?/;

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return regExpLink.test(v);
      },
      message: "NOT FOUND",
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("card", cardSchema);
