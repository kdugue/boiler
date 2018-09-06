const router = require("express").Router();

router.get("/", (req, res, next) => {
  console.log("This is coming from the PUPPIES route");
});

module.exports = router;
