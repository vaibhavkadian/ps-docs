var $ = require('cheerio')
var request = require('request')
var fs = require('fs')
var path = require('path')

function gotHTML(err, resp, html) {
  if (err) return console.error(err)
  var parsedHTML = $.load(html)
  fs.writeFile('./outer.html.txt', parsedHTML.html(), function (err) {});

  // get all img tags and loop over them
  var imageURLs = []
  parsedHTML('img').map(function(i, link) {
    var href = $(link).attr('src')
    if (!href.match('.jpg')) return
    imageURLs.push(href)

    //console.log(path.dirname(href).replace('/','.'))
    //fs.mkdirSync(path.dirname(href).replace('/'/g,'.'))
    //request(href).pipe(fs.createWriteStream(path.dirname(href) & path.basename(href)))
    request(href).pipe(fs.createWriteStream(__dirname + '/filesDownloaded/' + path.basename(href)))
  })

  fs.writeFile('./outer.html.a.txt', imageURLs.toString(), function (err) {});
  fs.writeFile('./outer.html.indenteda.txt', imageURLs.join("\r\n"), function (err) {});
}

var domain = 'http://news.distractify.com/pinar/wildlife-photos-of-the-year/?v=1'
//var domain = 'http://substack.net/images/'
request(domain, gotHTML)