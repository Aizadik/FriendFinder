// run the server

// fist import axios
const axios = require('axios')
const protocol = 'http' // or 'https'
const host = 'localhost'
    //const host = 'my-app.herocuapp.com'
const port = 8081


// test get friends method
function getFiendsSuccess() {
    const url = `${protocol}://${host}:${port}/api/friends`;
    console.log(url)
    axios.default.get(url)
        .then(function(res) {
            //// console.log(res.data)
            console.assert(res.data.success, 'success should be true')
        })
}
getFiendsSuccess()

// test get firends/:frinedId

// test post friends/