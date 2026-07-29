const { Router } = require("express");
const router = Router();
const controller = require("./../controllers/indexController");

router.get("/", controller.indexGet);
router.get("/delete/:id", controller.indexDelete);

module.exports = router;