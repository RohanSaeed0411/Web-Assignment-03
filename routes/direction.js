import direction from "../controllers/direction.js";
import express from "express";
const router = express.Router();

router.get("/", direction.getDirections);
router.post("/post-all/", direction.postDirections);
router.post("/", direction.createDirection);
router.get("/:id", direction.getDirection);
router.patch("/:id", direction.updateDirection);
router.delete("/:id", direction.deleteDirection);


export default router;
