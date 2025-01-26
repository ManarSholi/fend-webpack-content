var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))
app.use(express.json())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', function (req, res) {
    console.log("req: ", req.body);
    const inputValue = req.body.input;
    // res.send(mockAPIResponse)
    res.json({message: `Server received: ${inputValue}`});
})
