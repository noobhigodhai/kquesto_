const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));


router.get("/", async (req, res, next) => {

    // var payload ={
    //     profileId:req.session.user._id
    // }
    var name = req.user.name.givenName;
    var email = req.user.email;
    var data = {name :name,
                  email :email,
    };

    var userfound = await User.find({email:email});
    console.log(userfound.length==0)
        if(userfound.length==0){
            res.status(200).render("googleLoginMidlleaAccess" , data );
        }
        else if(userfound.length!=0){
            await User.findOne({email:email}).then(result=>{

                                                                        req.session.user = result;
                                                                        console.log(req.session.user)
                                                                        
                                                                        res.status(200).redirect("/");
                                               
            });
        }
  
 
    
   
})

module.exports = router;