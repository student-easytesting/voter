const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const { voterSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

router.route("/").get(authControllers.home);
router.route("/register").post(validate(voterSchema), authControllers.register);

module.exports = router;
