const { Router } = require("express");
const router = Router();
const controller = require("./../controllers/messageController");

router.get("/:id", controller.getDetails);

module.exports = router;