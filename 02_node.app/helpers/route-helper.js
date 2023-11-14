

function getHomePage(req, res) {

    console.log(" home page", req.url)

    console.log("Hello")
    res.send("hi")

    // res.sendFile('../public/index.html')
}

module.exports = {
    getHomePage
}   