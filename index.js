const express = require('express')
const app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!')
});


app.get('/test', function (req, res) {
    res.send({
        id: 1,
        description: "Hello World"
    });
});



app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})