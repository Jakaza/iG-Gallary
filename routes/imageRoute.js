const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary').v2;
const db = require('../config/dbConnection');

// Configuration 
cloudinary.config({
    cloud_name: process.env.C_NAME,
    api_key: process.env.C_API_KEY,
    api_secret: process.env.C_API_SECRET
});

router.post("/upload-image", async (req, res) => {
    const image_data = req.body;
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true
    }
    try {
        const imageReq = await cloudinary.uploader.upload(image_data.path, options)

        db.pool.connect(async (error, client) => {
            if (error) throw Error(error)
            try {
                const { public_id, original_filename, width, height, secure_url } = imageReq;

                const insertSQL = 'INSERT INTO igimages ( public_id, title, width, height, image_url) VALUES($1, $2, $3, $4, $5) RETURNING *';
                const values = [public_id, original_filename, width, height, secure_url];

                const formData = await client.query(insertSQL, values)
                const result = await formData.rows[0];

                res.status(200).json({
                    status: "success",
                    data: {
                        message: "Image Uploaded Successfully",
                        title: result.title,
                        cloudinary_id: result.public_id,
                        image_url: result.image_url,
                    },
                })

            } catch (error) {
                console.log(error);
            }
        })
    } catch (error) {
        console.log(error);
    }
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




