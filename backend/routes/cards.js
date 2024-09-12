const router = require("express").Router();

const { celebrate, Joi, Segments } = require("celebrate");

const {
  getCards,
  createCard,
  deleteCard,
  cardLike,
  cardDislike,
} = require("../controllers/cards");

router.get("/cards", getCards);

router.post(
  "/cards",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      link: Joi.required(),
    }),
  }),
  createCard
);

router.delete("/cards/:cardId", deleteCard);

router.put("/cards/:cardId/likes", cardLike);

router.delete("/cards/:cardId/likes", cardDislike);

module.exports = router;
