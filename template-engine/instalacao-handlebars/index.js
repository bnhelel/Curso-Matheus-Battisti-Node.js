const express = require("express");
const expbhs = require("express-handlebars");

const app = express()

app.engine('handlebars', expbhs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {layout: false})
});

app.listen(3000, () => {
    console.log("Servidor ligado!")
})