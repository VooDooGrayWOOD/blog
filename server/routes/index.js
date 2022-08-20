const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/auth", require("./auth.routes"));
router.use("/user", require("./user.routes"));
router.use("/comment", require("./comment.routes"));
router.use("/articleTable", require("./article.routes"));

module.exports = router;
