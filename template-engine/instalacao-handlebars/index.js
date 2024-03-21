const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard.handlebars', (req, res) => {
  res.render('dashboard')
});

app.get('/', function (req, res) {

  const user = {
    name: "Matheus",
    surname:"Battisti",
    age: 30,
  }
  const auth = true;

  res.render('home', {user: user, palavra}); //método do express que será passado do back ao front!
})

app.listen(3001, () => {
    console.log("Servidor funcionando!")
});