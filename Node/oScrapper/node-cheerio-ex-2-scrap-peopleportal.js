var $ = require('cheerio')
var request = require('request')
var request = request.defaults({jar: true})
var fs = require('fs')

request.get({
    url: 'https://peopleportal2.sapient.com/',
    followRedirect: false,
    auth: {
      user:'vakadi', 
      pass:'Cutth1@crap',
      sendImmediately:false}
}, function(error, response, body){
    console.log(response)
    fs.writeFile('./pp.outer.response.txt', response, function (err) {});
    //console.log(response.headers)
    console.log(body)
    request.get({
        url: 'https://peopleportal2.sapient.com/',
        header: response.headers
    },function(error, response, body){
        // The full html of the authenticated page
        console.log(body)
        fs.writeFile('./pp.outer.html.txt', body, function (err) {});
    });
});

