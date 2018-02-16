const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const Twit = require('twit')
const config = require('./config')
const T = new Twit(config)

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Ivan' });
});

app.get('/api/search/tweets', (req, res) => {
  T.get('search/tweets', {q: 'dear developers since:2018-2-1', count: 1}, (err, data, response) => {
    console.log(data)
    res.send({ express: data })
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
