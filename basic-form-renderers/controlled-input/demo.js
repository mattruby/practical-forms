// Note the Provider and color
var formGroupRenderer = function formGroupRenderer () {
	return React.createElement('div', {className: 'form-group'},
		React.createElement('label', {htmlFor: 'emailInput'}, 'Email address'),
		React.createElement('input', {type: 'email', id: 'emailInput'})
	);
};

ReactDOM.render(
	React.createElement(formGroupRenderer),
	document.getElementById('mount')
);