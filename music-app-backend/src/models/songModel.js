import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Changed 'string' to 'String'
  desc: { type: String, required: true },
  album: { type: String, required: true }, // Changed 'string' to 'String'
  image: { type: String, required: true }, // Changed 'string' to 'String'
  file: { type: String, required: true }, // Changed 'string' to 'String'
  duration: { type: String, required: true }, // Changed 'string' to 'String'
});

const songModel = mongoose.models.song || mongoose.model("song", songSchema);

export default songModel;
