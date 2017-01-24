const express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', function(req, res, next){
	res.sendFile(path.resolve(__dirname + '/public/react/index.html'));
})

app.listen(process.env.PORT || 3000);