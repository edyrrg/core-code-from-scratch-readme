# Thursday Challenge

## Forrest Gump Ping-Pong API 🏓

solution

``` JavaScript
const express = require('express'),
    app = express(),
    port = 3001,
    root = '/api/buba-gump'

app.get(root + '/ping', (req, res) => {
    res.json('pong')
})

app.get(root + '/pong', (req, res) => {
    res.json('ping')
})

app.listen(port, () => {
    console.log(`Running on PORT: ${port}`)
})
```

[git-project](https://github.com/edyrrg/ping-pong)

## Delayed Response API ⏳

solution

```JavaScript
const express = require('express'),
    app = express(),
    port = 3000,
    root = '/api/delay/'

app.get(root + ':id', (req, res) => {
    let timer = Number(req.params.id)
    if (Number.isInteger(timer)) {
        setTimeout(() => { res.send(`after ${timer}s, CoreCode response: Hello World`) }, timer)
    }
})

app.get(root, (req, res) => {
    setTimeout(() => { res.send(`default after 1000s, CoreCode response: Hello`) }, 1000);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
```

[git-project](https://github.com/edyrrg/delayed-response)

[Regresar](/README.md)
