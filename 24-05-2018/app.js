const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand:true,
            alias:'address',
            describe:'Address to fetch weather for',
            string:true
        }
    })
.help()
.alias('help', 'h')
.argv;

/*
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results, undefined, 2));
    }
});
*/

weather.getWeather(39.9396284, -75.18663959999999, (errorMessage, weatherResults) =>{
    if(errorMessage){
        console.log(errorMessage);
    } else {
        consle.log(JSON.stringify(weatherResults, undefined, 2));
    }
});