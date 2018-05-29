const request = require('request');

//key value prey
request({
    url: 'https://api.darksky.net/forecast/35644aa4d216e85779c2f788c1dd70db/39.9396284,-75.18663959999999',
    json: true
}, (err, response, body) => {
    console.log(body.currently.temperature)
}) 