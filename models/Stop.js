import mongoose from "mongoose";

const stopSchema = mongoose.Schema({
  stpid: { type: String, required: true },
  stpnm: { type: String , required: true},
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
});

export default mongoose.model("Stop", stopSchema);
