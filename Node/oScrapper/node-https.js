var https = require('https');

var options = {
  host: 'peopleportal2.sapient.com',
  path: '/',
  method: 'GET',
  headers: {
  	Host: 'peopleportal2.sapient.com',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:32.0) Gecko/20100101 Firefox/32.0',
Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
'Accept-Language': 'en-US,en;q=0.5',
'Accept-Encoding': 'gzip, deflate',
Cookie: 'ASP.NET_SessionId=quat4gpubxwhu3drvtqmcwgu; __utma=74057363.655258361.1411462213.1411462213.1411462213.1; __utmb=74057363.1.10.1411462213; __utmc=74057363; __utmz=74057363.1411462213.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); WSS_FullScreenMode=false',
Connection: 'keep-alive'
  }
};

var req = https.request(options, function(res) {
console.log("statusCode: ", res.statusCode);
console.log("headers: ", res.headers);
  res.on('data', function(d) {
    process.stdout.write(d);
  });
  res.on('err', function(d) {
    process.stdout.write(d);
  });
});