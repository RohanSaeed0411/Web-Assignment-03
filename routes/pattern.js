import pattern from "../controllers/pattern.js";
import express from "express";
const router = express.Router();

router.get("/", pattern.getPatterns);
router.post("/post-all/", pattern.postPatterns);
router.post("/", pattern.createPattern);
router.get("/:id", pattern.getPattern);
router.patch("/:id", pattern.updatePattern);
router.delete("/:id", pattern.deletePattern);

export default router;