const express = require("express")
const app = express();
require("dotenv").config();
const PORT = process.env.PORT_NO | 3000;


app.get("/", (req, res) => {
    res.status(200).json({
        message: "This is home page"
    })
})


app.listen(PORT, () => {
    console.log(`Server runing at port ${PORT}`);
})






