const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));


router.get("/", (req, res, next) => {
    var payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user,
        userLoggedInJs: JSON.stringify(req.session.user),
    }
  
    res.status(200).render("postPage" ,payload);
   
})
router.get("/textpost/:postId", (req, res, next) => {
    var postid = req.params.postId;
    var payload ={
        postid:postid,
        postType:"textpost",
        userLoggedInJs: JSON.stringify(req.session.user),
    }

    res.status(200).render("postPage" ,payload);
   
})
router.get("/videopost/:postId", (req, res, next) => {
    var postid = req.params.postId;
    var payload ={
        postid:postid,
        postType:"videopost",
        userLoggedInJs: JSON.stringify(req.session.user),
    }

    res.status(200).render("postPage" ,payload);
   
})
router.get("/photopost/:postId", (req, res, next) => {
    var postid = req.params.postId;
    var payload ={
        postid:postid,
        postType:"photopost",
        userLoggedInJs: JSON.stringify(req.session.user),
    }

    res.status(200).render("postPage" ,payload);
   
})
// router.post("/",async (req, res, next) => {

//     console.log(req.body.email)
//     var email = req.body.email
//     req.session.user = await User.findOne({email:email}).then(result=>{ req.session.user =result; 
//                                                                                         console.log(req.session.user._id)
//                                                                             if(result===null){
//                                                                                 res.status(200).send("null")
//                                                                                 console.log("hogaya samjo ")
//                                                                                 }
//                                                                                 else{
//                                                                                     res.status(200).redirect("/")
//                                                                                 }
                                                                                
//                                                                             });
   
// })
module.exports = router;