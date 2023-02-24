const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
    cloud_name: process.env.C_NAME,
    api_key: process.env.C_API_KEY,
    api_secret: process.env.C_API_SECRET
});


router.post("/upload-image", (req, res) => {



    res.status(200).json({
        message: "Upload New Image"
    })
})

router.put("/update-image", (req, res) => {
    res.status(200).json({
        message: "Update Old Image"
    })
})

router.delete("/delete-image", (req, res) => {
    res.status(200).json({
        message: "Delete An Image"
    })
})

router.get("/all-images", (req, res) => {
    res.status(200).json({
        message: "Get All Images"
    })
})


router.get("/:imageID", (req, res) => {
    res.status(200).json({
        message: "Get Image By ID"
    })
})





module.exports = router;




