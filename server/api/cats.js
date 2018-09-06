const router = require("express").Router();

router.get("/", (res, req, next) => {
  console.log("This is coming from the CATS route");
});

module.exports = router;
