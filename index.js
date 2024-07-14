var express = require('express');

var app = express();

var path = require('path');

var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
     res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/process_POST', urlencodedParser, function (req, res) {
     
     response = {
          first_name: req.query.first_name,
          last_name: req.query.last_name
     };
     console.log(response);
     res.end(JSON.stringify(response));
})

app.listen(5500, function () {
     console.log("Expresss App running at http://127.0.0.1:5500");
})