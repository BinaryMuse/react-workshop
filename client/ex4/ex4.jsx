var React = require("react");

var Application = React.createClass({
  render() {
    return (
      <div>
        <button>Click Me!</button>
        <div>Clicks:</div>
      </div>
    );
  }
});

React.render(
  <Application />,
  document.getElementById("app-container")
);
