import mongoose from "mongoose";

const patternSchema = mongoose.Schema({
  pid: { type: Number, required: true },
  ln: { type: Number },
  rtdir: { type: String , required: true},
  pt: { type: Array },
});

export default mongoose.model("Pattern", patternSchema);
