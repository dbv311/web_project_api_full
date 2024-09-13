const router = require("express").Router();

const { celebrate, Joi, Segments } = require("celebrate");

const {
  allUsers,
  getUser,
  newUser,
  login,
  updateUser,
  updateAvatar,
} = require("../controllers/users");

router.post(
  "/signup",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  newUser
);

router.post(
  "/signin",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  login
);

router.get("/users", allUsers);

router.get("/users/:id", getUser);

router.patch("/users/me", updateUser);

router.patch("/users/me/avatar", updateAvatar);

module.exports = router;
