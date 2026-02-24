const express = require('express');
const router = express.Router();
const {createw,getall,getsinglew,updatew,deletew

} = require("../controllers/wcontroller");
const Authrequire = require("../middleware/Authrequire");;
router.use(Authrequire);
// all workouts routes

router.get("/",getall)
router.get("/:id",getsinglew)

router.post("/",createw);
router.delete("/:id",deletew);
router.patch("/:id",updatew);
module.exports = router;

// sdpBrsay4rNGzYA6




