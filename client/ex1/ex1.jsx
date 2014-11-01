var React = require("react");

var Application = React.createClass({
});

ApplicationFactory = React.createFactory(Application);

React.render(
  ApplicationFactory(),
  document.getElementById("app-container")
);
