const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

app.get('/login', (req, res) => {
  res.sendFile('C:\\Users\\Matteo\\Documents\\GitHub\\Dashboard\\login\\login.html')
})

app.use(function (req, res, next) {
  res.status(404).render('login/404.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body
  // Validate username and password
  if (username === 'john' && password === '1234') {
    // Create login session
    req.session.isLoggedIn = true
    res.redirect('/404error')
  } else {
    res.send('Invalid credentials')
  }
})

app.get('/profile', (req, res) => {
  if (req.session.isLoggedIn) {
    res.send('Welcome to the profile page')
  } else {
    res.redirect('/login')
  }
})

app.listen(3000)