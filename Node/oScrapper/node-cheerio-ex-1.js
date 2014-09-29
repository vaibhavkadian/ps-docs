var cheerio = require('cheerio'),
    $ = cheerio.load('<h2 class = "title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

console.log($.html());

var parsedHTML = $.load($.html())

// query for all elements with class 'foo' and loop over them
parsedHTML('.welcome').map(function(i, foo) {
  // the foo html element into a cheerio object (same pattern as jQuery)
  foo = $(foo)
  console.log(foo.text())
})