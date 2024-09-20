const UserInfo = require("../models/user");
const handleError = require("../utils/HandleError");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { NODE_ENV, JWT_SECRET } = process.env;

const allUsers = (req, res) => {
  UserInfo.find({}).then((user) => {
    res.send(user);
  });
};

const getUser = (req, res) => {
  UserInfo.findById(req.user._id)
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => handleError(error, res));
};

const createUser = (req, res) => {
  const { email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) =>
      UserInfo.create({
        email,
        password: hash,
      })
    )
    .then((user) => {
      res.status(201).send({
        _id: user._id,
        email: user.email,
      });
    })
    .catch((error) => {
      handleError(error, res);
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  return UserInfo.findUserByCredentials(email, password)
    .then((user) => {
      const secretWord = NODE_ENV === "production" ? JWT_SECRET : "loquesea";
      const token = jwt.sign({ _id: user._id }, secretWord, {
        expiresIn: "7d",
      });
      res.send({ token });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  UserInfo.findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => handleError(error, res));
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  UserInfo.findByIdAndUpdate(req.user._id, { avatar }, { new: true })
    .orFail()
    .then((user) => {
      res.send(user);
    })
    .catch((error) => handleError(error, res));
};

module.exports = {
  allUsers,
  getUser,
  createUser,
  login,
  updateUser,
  updateAvatar,
};
