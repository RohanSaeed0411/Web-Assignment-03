import mongoose from "mongoose";

const directionSchema = mongoose.Schema({
  dir: { type: String , required: true},

});

export default mongoose.model("Direction", directionSchema);
