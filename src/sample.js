const express = require('express');
const app = express();

app.get('/', (req, res) => {res.send('500 error demo');});
app.get('/error',(req, res) => {res.send(error());});
app.use(function(req,err, res,text) {
    console.error(err.stack);
    res.type('text/explain');
    res.status(500);
    res.send('internal error 500 error demo');
})
app.listen(3000);