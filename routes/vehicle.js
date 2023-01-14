import vehicle from "../controllers/vehicle.js";
import express from "express";
const router = express.Router();

router.get("/", vehicle.getVehicles);
router.post("/post-all/", vehicle.postVehicles);
router.post("/", vehicle.createVehicle);
router.get("/:id", vehicle.getVehicle);
router.patch("/:id", vehicle.updateVehicle);
router.delete("/:id", vehicle.deleteVehicle);

export default router;
