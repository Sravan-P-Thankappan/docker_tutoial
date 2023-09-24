

function getHomePage(req, res) {

    console.log("getting home page")
    res.sendFile('../public/index.html')
}

module.exports = {
    getHomePage
}