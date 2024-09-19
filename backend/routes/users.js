const router = require("express").Router();

const { celebrate, Joi, Segments } = require("celebrate");

const auth = require("../middleware/auth");
const hasError = require("../middleware/hasError");

const {
  allUsers,
  getUser,
  createUser,
  login,
  updateUser,
  updateAvatar,
} = require("../controllers/users");

router.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("El servidor va a caer");
  }, 0);
});

router.post(
  "/signup",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  createUser
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

router.use(auth);

router.use(hasError);

router.get("/users", allUsers);

router.get("/users/me", getUser);

router.patch("/users/me", updateUser);

router.patch("/users/me/avatar", updateAvatar);

module.exports = router;
