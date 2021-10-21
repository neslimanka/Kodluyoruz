var express = require("express");
var router = express.Router();
router.route("/").all((req: any, res: any, next: any) => {
  res.send("It works. Try different route");
});

module.exports = router;
