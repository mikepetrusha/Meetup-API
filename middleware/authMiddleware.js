const jwt = require("jsonwebtoken");

module.exports = function (role) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        res.status(401).json({ message: "The user does not exist" });
      }
      const decodedData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      if (decodedData.role !== role) {
        return res
          .status(403)
          .json({ message: "The user does not have access" });
      }
      req.user = decodedData;
      next();
    } catch (error) {
      res.status(401).json({ message: "User token is invalid" });
    }
  };
};
