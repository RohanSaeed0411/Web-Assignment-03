import Route from "../models/Route.js";
import { routesData } from "../data/data.js";

const postRoutes = async (req, res) => {
  try {
    const routes = await Route.create(routesData["bustime-response"]["routes"]);
    res.status(200).json(routes);
  } catch (error) {
    res.send(error);
  }
};

const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find({});
    res.status(200).json(routes);
  } catch (error) {
    res.status(404);
  }
};

const getRoute = async (req, res) => {
  const { id } = req.params;
  try {
    const route = await Route.findById(id);
    res.status(200).json(route);
  } catch (error) {
    res.status(404);
  }
};

const createRoute = async (req, res) => {
  try {
    const route = await Route.create({ ...req.body });
    res.status(200).json(route);
  } catch (error) {
    res.send(error);
  }
};

const updateRoute = async (req, res) => {
  const { id } = req.params;

  try {
    const route = await Route.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true, runValidator: true }
    );
    res.status(200).json(route);
  } catch (error) {
    res.send(error);
  }
};

const deleteRoute = async (req, res) => {
  const { id } = req.params;
  try {
    const route = await Route.findByIdAndDelete(id);
    res.status(200).json(route);
  } catch (error) {
    res.status(404);
  }
};

export default {
  postRoutes,
  getRoutes,
  createRoute,
  getRoute,
  updateRoute,
  deleteRoute,
};
