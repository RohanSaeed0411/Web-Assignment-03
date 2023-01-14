import {
  vehiclesData,
  routesData,
  stopsData,
  directionsData,
  patternsData,
} from "./data/data.js";
import mongoose from "mongoose";
import express from "express";
import vehiclesRoute from "./routes/vehicle.js";
import routesRoute from "./routes/route.js";
import directionsRoute from "./routes/direction.js";
import stopsRoute from "./routes/stop.js";
import patternsRoute from "./routes/pattern.js";
import bodyParser from "body-parser";

const app = express();
const MONGO_URI =
  "mongodb+srv://rohan638:rohan08042001@mernstackapp.sd7hzra.mongodb.net/Bus-Tracker-API?retryWrites=true&w=majority";
const port = 3000;

// console.log(vehiclesData["bustime-response"]["vehicle"]);
// console.log(routesData["bustime-response"]);
// console.log(directionsData["bustime-response"]["directions"]);
// console.log(stopsData["bustime-response"]["stops"]);
// console.log(patternsData["bustime-response"]["ptr"]);

app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
  res.send(
    "<h1>Bus Tracker API</h1><ul><li><a href='/api/vehicles/'>Vehicles</a></li><li><a href='/api/routes/'>Routes</a></li><li><a href='/api/stops/'>Stops</a></li><li><a href='/api/directions/'>Directions</a></li><li><a href='/api/patterns/'>Patterns</a></li></ul>"
  );
});

app.use("/api/vehicles/", vehiclesRoute);
app.use("/api/routes/", routesRoute);
app.use("/api/directions/", directionsRoute);
app.use("/api/stops/", stopsRoute);
app.use("/api/patterns/", patternsRoute);

//db connection
try {
  mongoose.connect(MONGO_URI, () => {
    app.listen(port, () => {
      console.log("Server is listening to the port " + port);
    });
  });
} catch (error) {
  console.log(error);
}
