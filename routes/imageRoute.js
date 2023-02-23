const express = require("express");
const router = express.Router();

router.get("/all-images", (req, res) => {
    res.status(200).json({
        message: "Get All Images"
    })
})

router.get("/:imageID", (req, res) => {
    res.status(200).json({
        message: "Get All Images"
    })
})

router.post("/upload-image", (req, res) => {
    res.status(200).json({
        message: "Get All Images"
    })
})


router.delete("/delete-image", (req, res) => {
    res.status(200).json({
        message: "Get All Images"
    })
})


router.put("/update-image", (req, res) => {
    res.status(200).json({
        message: "Get All Images"
    })
})



module.exports = router;




