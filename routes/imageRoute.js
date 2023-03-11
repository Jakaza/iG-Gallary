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

router.get("/all-images", (req, res) => {
  db.pool.connect(async (error, client) => {
    const querySQL = 'SELECT public_id, title, image_url FROM igimages';
    try {
      const data = await client.query(querySQL)
      res.status(200).json({
        status: "success",
        data: data.rows
      })
    } catch (error) {
      console.log(error);
    }
  })
})
router.get("/:imageID", (req, res) => {
  db.pool.connect((eror, client) => {
    try {
      const querySQL = "SELECT public_id, title, image_url FROM igimages WHERE public_id = $1";
      const id = req.params.imageID;
      const data = await client.query();

      if (data == null || !data || data == undefined) {
        return res.status(404).status({ status: "success", data: `Data with id : ${id} not found.` })
      }
      res.status(200).json({
        status: "success",
        data: data.rows[0];
      })

    } catch (error) {
      return new Error(error)
    }
  })
})





module.exports = router;




