import Direction from "../models/Direction.js";
import { directionsData } from "../data/data.js";

const postDirections = async (req, res) => {
  try {
    const directions = await Direction.create(
      directionsData["bustime-response"]["directions"]
    );
    res.status(200).json(directions);
  } catch (error) {
    res.send(error);
  }
};

const getDirections = async (req, res) => {
  try {
    const directions = await Direction.find({});
    res.status(200).json(directions);
  } catch (error) {
    res.status(404);
  }
};

const createDirection = async (req, res) => {
  try {
    const direction = await Direction.create({ ...req.body });
    res.status(200).json(direction);
  } catch (error) {
    res.send(error);
  }
};

const getDirection = async (req, res) => {
  const { id } = req.params;
  try {
    const direction = await Direction.findById(id);
    res.status(200).json(direction);
  } catch (error) {
    res.status(404);
  }
};

const updateDirection = async (req, res) => {
  const { id } = req.params;

  try {
    const direction = await Direction.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidator: true }
    );
    res.status(200).json(direction);
  } catch (error) {
    res.send(error);
  }
};

const deleteDirection = async (req, res) => {
  const { id } = req.params;
  try {
    const direction = await Direction.findByIdAndDelete(id);
    res.status(200).json(direction);
  } catch (error) {
    res.status(404);
  }
};

export default {
  getDirections,
  postDirections,
  createDirection,
  getDirection,
  updateDirection,
  deleteDirection,
};
