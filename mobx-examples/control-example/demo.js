// Note the Provider and color
var inputRenderer = mobxReact.observer(function (props) {
	return React.createElement('form', null,
		React.createElement('div', {className: 'form-group'},
			React.createElement('label', {htmlFor: 'email'}, 'Email'),
			React.createElement('input', props.formControl.controlProps)
		)
	);
});

var formModel = mobx.observable({
	email: ''
});

var controlFactory = function (modelValue, controlHtmlAttributes) {
	var control = {}
	mobx.extendObservable(control, {
		htmlAttributes: mobx.observable.map(controlHtmlAttributes),
		controlProps: mobx.computed(function controlProps () {
			return Object.assign(control.htmlAttributes.toJS(), {
				value: modelValue,
				onChange: control.changeHandler
			});
		}),
		changeHandler: mobx.action(function (event) {
			modelValue = event.target.value;
		})
	});
	return control;
};

var formControl = controlFactory(formModel.email, {
	className: 'form-control',
	type: 'email',
	name: 'email'
});

ReactDOM.render(
	React.createElement(inputRenderer, {formControl: formControl}),
	document.getElementById('mount')
);
