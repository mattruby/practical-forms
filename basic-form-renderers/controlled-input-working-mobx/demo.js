// Note the Provider and color
var inputRenderer = mobxReact.observer(function (props) {
	return React.createElement('form', null,
		React.createElement('div', {className: 'form-group'},
			React.createElement('input', {
				type: 'text',
				name: 'input1',
				value: props.formModel.input1,
				onChange: props.changeHandler
			})
		),
		React.createElement('div', {className: 'form-group'},
			React.createElement('input', {
				type: 'text',
				name: 'input2',
				value: props.formModel.input2,
				onChange: props.changeHandler
			})
		)
	);
});

var formModel = mobx.observable({
	input1: 'input1 value',
	input2: 'input2 value'
});

var updateFormModel = function (event) {
	formModel[event.target.name] = event.target.value;
};

ReactDOM.render(
	React.createElement(inputRenderer, {formModel: formModel, changeHandler: updateFormModel}),
	document.getElementById('mount')
);
