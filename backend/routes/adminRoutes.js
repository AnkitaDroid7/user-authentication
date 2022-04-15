const express = require ('express');
const { registerAdmin } = require('../controllers/adminControllers');
const router = express.Router();

router.route("/admin").post(registerAdmin);

module.exports = router;