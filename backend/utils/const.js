const { NODE_ENV, JWT_SECRET } = process.env;
const token = jwt.sign(
  { _id: user._id },
  NODE_ENV === "production" ? JWT_SECRET : "loquesea"
);
