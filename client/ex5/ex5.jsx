var crypto = require("crypto");

var React = require("react"),
    gravatar = require("gravatar");

var Gravatar = React.createClass({
  propTypes: {
    email: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <img src={gravatar.url(this.props.email)} />
    );
  }
});

var Application = React.createClass({
  getInitialState() {
    return {
    };
  },

  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <input type="submit" value="Add Email" />
        </form>
      </div>
    );
  }
});

React.render(
  <Application />,
  document.getElementById("app-container")
);
