export const checkUser = (req, res, next) => {
  const { name, age, address } = req.body;
  if (!name || !age || !address) {
    return res.status(400).json({ message: "All fields are required" });
  } else {
    next();
  }
};
