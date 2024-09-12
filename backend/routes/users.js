const router = require("express").Router();

const { celebrate, Joi, Segments } = require("celebrate");

const {
  allUsers,
  getUser,
  newUser,
  updateUser,
  updateAvatar,
} = require("../controllers/users");

router.post(
  "/users",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
      name: Joi.string().default("Jacques Cousteau"),
      about: Joi.string().default("Explorador"),
      avatar: Joi.string().default(
        "https://practicum-content.s3.us-west-1.amazonaws.com/resources/moved_avatar_1604080799.jpg"
      ),
    }),
  }),
  newUser
);

router.get("/users", allUsers);

router.get("/users/:id", getUser);

router.patch("/users/me", updateUser);

router.patch("/users/me/avatar", updateAvatar);

module.exports = router;
