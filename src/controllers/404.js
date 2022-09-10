export const notFound = (req, res, _next) => {
  res.json({ message: "Sorry this endpoint does not exist in our app" });
};
