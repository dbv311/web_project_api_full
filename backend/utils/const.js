export const { NODE_ENV, JWT_SECRET } = process.env;
export const token = jwt.sign(
  { _id: user._id },
  NODE_ENV === "production" ? JWT_SECRET : "loquesea"
);

export const allowedOrigins = [
  "http://maxidanna.mooo.com",
  "http://www.maxidanna.mooo.com",
  "https://maxidanna.mooo.com",
  "https://www.maxidanna.mooo.com",
  "http://localhost:3000",
  "https://localhost:3000",
];
