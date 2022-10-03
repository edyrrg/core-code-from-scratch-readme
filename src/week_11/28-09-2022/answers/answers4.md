# Express.JS Core Understanding

My first app with Express.js

``` JavaScript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```

[repositorio-git](https://github.com/edyrrg/myapp)

[Regresar](../README.md)
