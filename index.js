var express = require('express');
var app = express();
var request = require('request');

app.use(express.static(__dirname + '/Public'));

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/survey', function (req, res) {
    request('http://api.insightexpress.com/surveys?X-ApiKey=26FE05DD-A149-405E-8CA8-B91E81A7077C/surveys', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log('body:', body) // Print the google web page.
      } else {
        console.log('error:', error);
      }
      console.log('status code:', response.statusCode);
      console.log('response:', response);
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
