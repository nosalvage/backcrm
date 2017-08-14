const express = require("express");
const roomsController = require("../controllers/roomsController");
const passport = require("passport");

const router = express.Router();

router.get(
  "/",
  // passport.authenticate("jwt", { session: false }),
  roomsController.getAllRooms
);
router.post("/", roomsController.addNewRoom);
router.get("/:id", roomsController.getRoom);
router.put("/:id", roomsController.changeRoomInfo);
router.delete("/:id", roomsController.deleteRoom);

module.exports = router;
