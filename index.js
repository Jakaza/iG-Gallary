const express = require("express")
const app = express();
require("dotenv").config();
const PORT = process.env.PORT_NO | 3000;


app.get("/", (req, res) => {
    res.status(200).json({
        message: "This is home page"
    })
})

app.get("/api/image", (req, res) => {
    res.status(200).json({
        message: "Get All Images"
    })
})

app.listen(PORT, () => {
    console.log(`Server runing at port ${PORT}`);
})






