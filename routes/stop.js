import stop from "../controllers/stop.js";
import express from "express";
const router = express.Router();

router.get("/", stop.getStops);
router.post("/post-all/", stop.postStops);
router.post("/", stop.createStop);
router.get("/:id", stop.getStop);
router.patch("/:id", stop.updateStop);
router.delete("/:id", stop.deleteStop);

export default router;
