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
        const imageReq = await cloudinary.uploader.upload(imagePath, options)
        const resData = await imageReq;




        console.log(resData);
        console.log(resData.secure_url);
    } catch (error) {
        console.log(error);
    }






    db.pool.connect(async (error, client) => {

        // console.log(client);
        // const insertSQL = 'INSERT INTO igimages ( public_id, title, width, height, image_url) VALUES($1, $2, $3, $4, $5) RETURNING *';
        // const values = ['public 2', 'title 2', 40, 60, 'image_url2'];

        // try {
        //     const formData = await client.query(insertSQL, values)

        //     console.log(formData);
        // } catch (error) {
        //     console.log(error);
        // }



        // client.query(insertSQL, values).then((tData) => {
        //     console.log(tData);
        // }).catch((error) => {
        //     console.log(error);
        // })


    })

    // try {
    //     const imageReq = await cloudinary.uploader.upload(imagePath, options)
    //     const resData = await imageReq;




    //     console.log(resData);
    //     console.log(resData.secure_url);
    // } catch (error) {
    //     console.log(error);
    // }

    res.status(200).json({
        message: "Upload New Image",
        imagePath
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




