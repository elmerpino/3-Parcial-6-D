const request = require('request');

var getWeather = (lat, lng, callback)=> {
    request({
        url: `https://api.darksky.net/forecast/35644aa4d216e85779c2f788c1dd70db/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(error){
            callback('Unable to connect to Forecast.io server.');
        } else if (response.statusCode === 400){
            callback('Unable to fetch wather.');
        } else if (response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;