var formGroupRenderer = function formGroupRenderer() {
  return React.createElement(
    "form",
    null,
    React.createElement(
      "div",
      { className: "form-group" },
      React.createElement("label", { htmlFor: "emailInput" }, "Email address"),
      React.createElement("input", {
        className: "form-control",
        name: "email",
        type: "email",
        id: "emailInput",
        value: ""
      })
    )
  );
};

ReactDOM.render(
  React.createElement(formGroupRenderer),
  document.getElementById("mount")
);
