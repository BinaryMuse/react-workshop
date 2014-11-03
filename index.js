var http = require("http"),
    express = require("express"),
    serveStatic = require("serve-static"),
    webpack = require("webpack"),
    webpackDevMiddleware = require("webpack-dev-middleware"),
    webpackConfig = require("./webpack.config.js"),
    exercises = require("./exercises.js");

var app = express(),
    server = http.Server(app);

app.set("view engine", "ejs");
app.use(serveStatic("./public"));

app.use(webpackDevMiddleware(webpack(webpackConfig), {
  noInfo: true,
  publicPath: "/js/"
}));

app.get("/", function(req, res) {
  res.render("index", {
    exercises: exercises
  });
});

app.get("/test", function(req, res) {
  res.render("test");
});

app.get("/exercises/:number", function(req, res, next) {
  var number = ~~req.params.number;
  if (number >= 1 && number <= exercises.length) {
    res.render("exercise", {
      exercise: number
    });
  } else {
    next();
  }
});

var port = process.env.PORT || 8191;
server.listen(port, function() {
  console.log("Listening at http://localhost:" + port + "/");
});
