const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
const port = process.env.PORT || 3000;

let todos = [];

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   let current = date.getDate();
    res.render('list', {kindOfDay: current, newListItem: todos});
});

app.post('/', (req, res) => {
   let todo = req.body.tod;

   todos.push(todo);
    res.redirect('/');
});

app.listen(port, () => console.log(`Something is happening on port ${port}`));