const express = require("express");
const router = express.Router();


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




