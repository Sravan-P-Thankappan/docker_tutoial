

function getHomePage(req, res) {

    console.log("getting home page", req.url)

    res.sendFile('../public/index.html')
}

module.exports = {
    getHomePage
}