const express = require("express");
const router = express.Router();
const { getAllImages,
    getSingleImage } = require("./controller")

router.get("/all-images",)

router.get("/:imageID",)

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




