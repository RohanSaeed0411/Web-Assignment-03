import mongoose from "mongoose";

const routeSchema = mongoose.Schema({
  rt: { type: String },
  rtnm: { type: String },
  rtclr: { type: String },
  rtdd: { type: String },
});

export default mongoose.model("Route", routeSchema);
