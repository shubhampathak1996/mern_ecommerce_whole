const express = require("express");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../../validators/auth");
const { signup, signin } = require("../../controller/admin/auth");

const router = express.Router();

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);

router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

module.exports = router;
