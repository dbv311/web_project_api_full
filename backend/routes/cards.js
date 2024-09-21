const router = require("express").Router();
const validator = require("validator");

const { celebrate, Joi, Segments } = require("celebrate");

const {
  getCards,
  createCard,
  deleteCard,
  cardLike,
  cardDislike,
} = require("../controllers/cards");

const validateURL = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error("string.uri");
};

router.get("/cards", getCards);

router.post(
  "/cards",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      link: Joi.required().custom(validateURL),
    }),
  }),
  createCard
);

router.delete("/cards/:cardId", deleteCard);

router.put("/cards/likes/:cardId", cardLike);

router.delete("/cards/likes/:cardId", cardDislike);

module.exports = router;
