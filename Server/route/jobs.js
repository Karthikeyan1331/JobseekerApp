const express = require('express');
const router = express.Router();
const jobsController = require("../controller/jobs")
router.get("/Jobs", jobsController.jobsget)
router.post("/JobSearch", jobsController.jobSearch)
module.exports = router;