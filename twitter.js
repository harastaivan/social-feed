console.log("The bot is starting")

const Twit = require('twit')

const config = require('./config')
const T = new Twit(config)

let tweets = []

T.get('search/tweets', {q: 'banana since:2018-2-1', count: 5}, (err, data, response) => {
  console.log(data)
})
