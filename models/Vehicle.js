import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
  vid: { type: String , required: true},
  tmstmp: { type: String },
  lat: { type: String , required: true},
  lon: { type: String , required: true},
  hdg: { type: String },
  pid: { type: Number , required: true},
  rt: { type: String , required: true},
  des: { type: String , required: true},
  pdist: { type: Number },
  dly: { type: Boolean },
  tatripid: { type: String },
  origtatripno: { type: String },
  tablockid: { type: String },
  zone: { type: String },
});

export default mongoose.model("Vehicle", vehicleSchema);
