var friends = require("../data/friend.js");

module.exports = function(app){
    app.get("/api/tables", (req, res) =>{
     console.log(friends);
        res.json(friends);
    }); 

    app.post("/api/tables", (req, res) => {
      friends.push(req.body);
      res.json(true);

    });

    app.post("/api/clear", function (req, res){
      friends.length = 0;
      res.json({ ok :true});
    });


}

