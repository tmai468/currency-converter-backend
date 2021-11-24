const express = require('express')
const path = require('path');

const app = express()
app.get('/', (request, response) => {
    response.send('<h1>Currency Converter</h1>')
})
const port = process.env.PORT || 3001
// app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () => console.log(`Server is running on port ${port}!`))