const express = require('express')

const app = express()

app.get('/users', (req, res) => {
    console.log('calling get endpoint')
    res.json({ 'Users': ['ahkam', 'yahya', 'yoosuf']})
});

app.listen(5000, ()=> {console.log('server started')});
