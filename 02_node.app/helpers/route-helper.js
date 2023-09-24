

function getHomePage(req, res) {

    res.sendFile('../public/index.html')
}

module.exports = {
    getHomePage
}