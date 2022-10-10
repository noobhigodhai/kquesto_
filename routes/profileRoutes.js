const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));


router.get("/", (req, res, next) => {

    var payload ={
        
        profile: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
        profileinfo: JSON.stringify(req.session.user),
    }

    res.status(200).render("profilePage" ,payload);
   
})
router.get("/:profileId", async (req, res, next) => {
    var payload;
    var profileId = req.params.profileId;
    // var id = req.params.profileId

   await  User.findOne({_id:profileId}).then(result=>{

        payload ={
            
            profile: result,
            userLoggedInJs: JSON.stringify(req.session.user),
            
        }

    })
    

    res.status(200).render("profilePage" ,payload);
})
module.exports = router;