import route from "../controllers/route.js";
import express from "express";
const router = express.Router();

router.get("/", route.getRoutes);
router.post("/post-all/", route.postRoutes);
router.post("/", route.createRoute);
router.get("/:id", route.getRoute);
router.patch("/:id", route.updateRoute);
router.delete("/:id", route.deleteRoute);

export default router;
