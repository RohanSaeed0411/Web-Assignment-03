import Pattern from "../models/Pattern.js";
import { patternsData } from "../data/data.js";

const postPatterns = async (req, res) => {
  try {
    const patterns = await Pattern.create(
      patternsData["bustime-response"]["ptr"]
    );
    res.status(200).json(patterns);
  } catch (error) {
    res.send(error);
  }
};

const getPatterns = async (req, res) => {
  try {
    const patterns = await Pattern.find({});
    res.status(200).json(patterns);
  } catch (error) {
    res.status(404);
  }
};

const getPattern = async (req, res) => {
  const { id } = req.params;
  try {
    const pattern = await Pattern.findById(id);
    res.status(200).json(pattern);
  } catch (error) {
    res.status(404);
  }
};

const createPattern = async (req, res) => {
  try {
    const pattern = await Pattern.create({ ...req.body });
    res.status(200).json(pattern);
  } catch (error) {
    res.send(error);
  }
};

const updatePattern = async (req, res) => {
  const { id } = req.params;

  try {
    const pattern = await Pattern.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidator: true }
    );
    res.status(200).json(pattern);
  } catch (error) {
    res.send(error);
  }
};

const deletePattern = async (req, res) => {
  const { id } = req.params;
  try {
    const pattern = await Pattern.findByIdAndDelete(id);
    res.status(200).json(pattern);
  } catch (error) {
    res.status(404);
  }
};

export default {
  postPatterns,
  getPatterns,
  createPattern,
  getPattern,
  updatePattern,
  deletePattern,
};
