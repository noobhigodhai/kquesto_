const express = require('express');
const app = express();
const port =80;
const path = require('path')
const bodyParser = require("body-parser")
const session = require("express-session");



app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(port, () => console.log("Server listening on port " + port));
app.set("view engine", "pug");
app.set("views", "views");


app.use(session({
    secret: "bbq chips",
    resave: true,
    saveUninitialized: false
}))



app.get('/logout', (req, res) => {
//   req.logout();
  req.session.destroy();
  res.redirect('/login');
});


app.use(bodyParser.urlencoded({ extended: false }));
const registerRoute = require('./routes/registerRoutes');
const googleLoginMidlleaAccessRoute = require('./routes/googleLoginMidlleaAccessRoute');
const loginRoute = require('./routes/loginRoutes');
const homeRoute = require('./routes/homeRoutes');
const postRoute = require('./routes/PostRoutes');
const ProfileRoute = require('./routes/profileRoutes');
const exploreMentorRoute = require('./routes/exploreMentorRoutes');
const messageRoute = require('./routes/messageRoutes');
const postPageRoute = require('./routes/postPageRoute');
const notificationPageRoute = require('./routes/notificationPageRoutes');




app.use('/register' , registerRoute)
app.use('/login' , loginRoute)
app.use('/profile' , ProfileRoute)
app.use('/home' ,  homeRoute)
app.use('/message' , messageRoute)
app.use('/post' ,  postRoute)
app.use('/googleLoginMidlleaAccess' , googleLoginMidlleaAccessRoute)
app.use('/exploreMentor' , exploreMentorRoute)
app.use('/notification' , notificationPageRoute)
app.use('/postPage' , postPageRoute)




app.get("/" , async (req , res ,next )=>{

   

  res.status(200).render("home3");
 })


         
