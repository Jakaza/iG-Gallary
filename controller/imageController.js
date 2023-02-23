const getAllImages = (req, res) => {
    res.status(200).json({
        message: "Get All Images"
    })
}

const getSingleImage = (req, res) => {
    res.status(200).json({
        message: "Get All Images"
    })
}


module.exports = {
    getAllImages,
    getSingleImage
}