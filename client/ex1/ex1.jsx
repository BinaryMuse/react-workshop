var React = require("react");

var Application = React.createClass({
  render() {
  }
});

ApplicationFactory = React.createFactory(Application);

React.render(
  ApplicationFactory(),
  document.getElementById("app-container")
);
