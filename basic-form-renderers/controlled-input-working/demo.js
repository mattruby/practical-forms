// Note the Provider and color
var formGroupRenderer = React.createClass({
  getInitialState: function() {
    return {
      email: "test value 1"
    };
  },
  render: function() {
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
          name: "email",
          type: "email",
          id: "emailInput",
          value: this.state.emailValue,
          onChange: this.changeHandler
        })
      )
    );
  },
  changeHandler: function(event) {
    var changeObj = {};
    changeObj[event.target.name] = event.target.value;
    this.setState(changeObj);
  }
});

ReactDOM.render(
  React.createElement(formGroupRenderer),
  document.getElementById("mount")
);
