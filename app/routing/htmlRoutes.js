// DEPENDENCIES 
// We need to include the path package to get the correct file path for our html
var path = require("path");

module.exports = function (app) {
  // Below code handles when users visits a page.
  // In each of the below cases the user is shown an HTML page of content

    app.get("/", function(req, res) {
  
        res.sendFile(path.join(__dirname,  "../public/home.html"));
      });
    app.get("/survey", function(req, res) {
      
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });

      app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
      });

}


