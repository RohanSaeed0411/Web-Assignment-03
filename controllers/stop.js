import Stop from "../models/Stop.js";
import { stopsData } from "../data/data.js";

const postStops = async (req, res) => {
  try {
    const stops = await Stop.create(stopsData["bustime-response"]["stops"]);
    res.status(200).json(stops);
  } catch (error) {
    res.send(error);
  }
};

const getStops = async (req, res) => {
  try {
    const stops = await Stop.find({});
    res.status(200).json(stops);
  } catch (error) {
    res.status(404);
  }
};

const createStop = async (req, res) => {
  try {
    const stop = await Stop.create({ ...req.body });
    res.status(200).json(stop);
  } catch (error) {
    res.send(error);
  }
};
const getStop = async (req, res) => {
  const { id } = req.params;
  try {
    const stop = await Stop.findById(id);
    res.status(200).json(stop);
  } catch (error) {
    res.status(404);
  }
};

const updateStop = async (req, res) => {
  const { id } = req.params;

  try {
    const stop = await Stop.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidator: true }
    );
    res.status(200).json(stop);
  } catch (error) {
    res.send(error);
  }
};

const deleteStop = async (req, res) => {
  const { id } = req.params;
  try {
    const stop = await Stop.findByIdAndDelete(id);
    res.status(200).json(stop);
  } catch (error) {
    res.status(404);
  }
};

export default {
  postStops,
  getStops,
  createStop,
  getStop,
  updateStop,
  deleteStop,
};
