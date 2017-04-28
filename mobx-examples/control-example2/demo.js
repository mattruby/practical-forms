// Note the Provider and color
var inputRenderer = mobxReact.observer(function (props) {
	return React.createElement('form', null,
		React.createElement('div', props.formGroup.htmlAttributes,
			React.createElement('label', props.formGroup.label.htmlAttributes),
			React.createElement('input', props.formGroup.control.htmlAttributes)
		)
	);
});

var formModel = mobx.observable({
	email: ''
});

var formSettings = {
	email: {
		control: {
			className: 'form-control',
			type: 'email',
			name: 'email',
			id: 'email'
		},
		label: {
			htmlFor: 'email',
			children: 'Email'
		}
	}
};

var formGroupFactory = function (key, modelValue, settings) {

	// build a control and a label
	var control = controlFactory(key, modelValue, settings.control);
	var label = labelFactory(key, settings.label);

	return {
		htmlAttributes: {
			className: 'form-group'
		},
		control: control,
		label: label
	};

};

var controlFactory = function (key, modelValue, controlHtmlAttributes) {
	var control = {}
	mobx.extendObservable(control, {
		htmlAttributesMap: mobx.observable.map(controlHtmlAttributes),
		htmlAttributes: mobx.computed(function controlProps () {
			return Object.assign(control.htmlAttributesMap.toJS(), {
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

var labelFactory = function (key, labelHtmlAttributes) {
	var label = {}
	mobx.extendObservable(label, {
		htmlAttributesMap: mobx.observable.map(labelHtmlAttributes),
		htmlAttributes: mobx.computed(function labelProps () {
			return label.htmlAttributesMap.toJS();
		})
	});
	return label;
};

var formGroup = formGroupFactory('email', formModel.email, formSettings.email);

ReactDOM.render(
	React.createElement(inputRenderer, {formGroup: formGroup}),
	document.getElementById('mount')
);
