import Vehicle from "../models/Vehicle.js";
import { vehiclesData } from "../data/data.js";

const postVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.create(
      vehiclesData["bustime-response"]["vehicle"]
    );
    res.status(200).json(vehicles);
  } catch (error) {
    res.send(error);
  }
};
const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(404);
  }
};

const createVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create({ ...req.body });
    res.status(200).json(vehicle);
  } catch (error) {
    res.send(error);
  }
};

const getVehicle = async (req, res) => {
  const { id } = req.params;
  try {
    const vehicle = await Vehicle.findById(id);
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(404);
  }
};

const updateVehicle = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  // console.log(req.body);
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidator: true }
    );
    res.status(200).json(vehicle);
  } catch (error) {
    res.send(error);
  }
};

const deleteVehicle = async (req, res) => {
  const { id } = req.params;
  try {
    const vehicle = await Vehicle.findByIdAndDelete(id);
    res.status(200).json(vehicle);
  } catch (error) {
    res.status(404);
  }
};

export default {
  getVehicles,
  postVehicles,
  createVehicle,
  getVehicle,
  updateVehicle,
  deleteVehicle,
};
