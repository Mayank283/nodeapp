const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let text = {
        name: 'Mayank',
        roll: 10283,
        class: 10
    };
    res.send((text))
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})