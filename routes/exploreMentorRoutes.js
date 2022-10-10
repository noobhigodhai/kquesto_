const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));


router.get("/", (req, res, next) => {

    var payload = {
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
    }

    res.status(200).render("exploreMentor" ,payload);
   
})

module.exports = router;