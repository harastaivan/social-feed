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
  res.send({ express: 'Hello From Twitter' });
  T.get('search/tweets', {q: 'banana since:2018-2-1', count: 5}, (err, data, response) => {
    console.log(data)
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));
