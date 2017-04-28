// Note the Provider and color
var formGroupRenderer = React.createClass({
  getInitialState: function() {
    return {
      emailValue: "test value 1"
    };
  },
  render: function() {
    var self = this;
    return React.createElement(
      "form",
      null,
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "label",
          { htmlFor: "emailInput" },
          "Email address"
        ),
        React.createElement("input", {
          className: "form-control",
          type: "email",
          id: "emailInput",
          value: this.state.emailValue,
          onChange: function(event) {
            self.setState({ emailValue: event.target.value });
          }
        })
      )
    );
  }
});

ReactDOM.render(
  React.createElement(formGroupRenderer),
  document.getElementById("mount")
);
