const express = require('express');
const path = require('path');
let app = express();

// app.use('/resources', express.static('node_modules/resources/paper/dist'));
app.use(express.static('public'));


app.get('/paperjs', function(req, res, next){
  res.sendFile(path.join(__dirname, 'node_modules', 'paper', 'dist', 'paper-full.min.js'))
});

app.get('/', function(req, res, next){
	res.sendFile(path.resolve(__dirname + '/public/index.html'));
})


app.listen(process.env.PORT || 3000);
