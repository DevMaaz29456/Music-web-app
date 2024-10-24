import { v2 as cloudinary } from "cloudinary";
import songModel from "../models/songModel.js";

const addSong = async (req, res) => {
  try {
    const { name, desc, album } = req.body;
    const audioFile = req.files.audio[0];
    const imageFile = req.files.image[0];

    // Upload audio file to Cloudinary
    const audioUpload = await cloudinary.uploader.upload(audioFile.path, {
      resource_type: "video",
    });

    // Upload image file to Cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    // Log the uploaded details (optional)
    console.log(
      name,
      desc,
      album,
      audioFile,
      imageFile,
      audioUpload,
      imageUpload
    );

    // You may want to save the uploaded details to the database here

    // Send a success response
    res.status(200).json({
      message: "Song added successfully",
      data: {
        name,
        desc,
        album,
        audioUrl: audioUpload.secure_url,
        imageUrl: imageUpload.secure_url,
      },
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while adding the song." });
  }
};

const listSong = (req, res) => {
  // Implementation for listing songs
};

export { addSong, listSong };
