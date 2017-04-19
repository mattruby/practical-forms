// Note the Provider and color
var inputRenderer = React.createClass({
	getInitialState: function () {
		return {
			input1: 'test value 1',
			input2: 'test value 2'
		}
	},
	render: function () {
		return React.createElement('form', null,
			React.createElement('div', {className: 'form-group'},
				React.createElement('input', {
					type: 'text',
					name: 'input1',
					value: this.state.input1,
					onChange: this.inputChangeHandler
				})
			),
			React.createElement('div', {className: 'form-group'},
				React.createElement('input', {
					type: 'text',
					name: 'input2',
					value: this.state.input2,
					onChange: this.inputChangeHandler
				})
			)
		);
	},
	inputChangeHandler: function (event) {
		this.setState(event.target.name, event.target.value);
	}
});

ReactDOM.render(
	React.createElement(inputRenderer),
	document.getElementById('mount')
);