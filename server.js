var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

let articles = {
  'article-one': {
  heading: 'This is article-one heading',
  text: 'This is article-one text'
}, 'article-two': {
  heading: 'This is article-two heading',
  text: 'This is article-two text'
}, 'article-three': {
  heading: 'This is article-three heading',
  text: 'This is article-three heading'
}};

let htmlTemplate = function(data) {
  return `
  <h2>${data.heading}</h2>
  <p>${data.text}</p>
  `
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

// app.get('/ui/article-one', function(req, res) {
//   res.sendFile(__dirname, 'ui', 'article-one.html');
// });

app.get('/:name', function(req, res) {
  let articleName = req.params.name;
  res.send(htmlTemplate(articles[articleName]));
});

app.get('/ui/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function() {
  console.log(`IMAD course app listening on port ${port}!`);
});
