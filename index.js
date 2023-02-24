require("dotenv").config();
const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT_NO | 3000;
const router = require("./routes/imageRoute")
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application / json
app.use(bodyParser.json())
app.use("/", router)


app.listen(PORT, () => {
    console.log(`Server runing at port ${PORT}`);
})






