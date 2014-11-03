var React = require("react");

var Application = React.createClass({
  render() {
    return (
      <div>
        <h1>You're good to go!</h1>
        <p>Everything seems to be working here.</p>
      </div>
    );
  }
});

React.render(
  <Application />,
  document.getElementById("app-container")
);
