var $ = require('cheerio')
var request = require('request')
var fs = require('fs')

function gotHTML(err, resp, html) {
  if (err) return console.error(err)
  var parsedHTML = $.load(html)
  fs.writeFile('./outer.html.txt', parsedHTML.html(), function (err) {});

  // get all img tags and loop over them
  var imageURLs = []
  parsedHTML('a').map(function(i, link) {
    var href = $(link).attr('href')
    if (!href.match('.png')) return
    imageURLs.push(domain + href)
  })

  fs.writeFile('./outer.html.a.txt', imageURLs.toString(), function (err) {});
  fs.writeFile('./outer.html.indenteda.txt', imageURLs.join("\r\n"), function (err) {});
}

var domain = 'http://substack.net/images/'
request(domain, gotHTML)