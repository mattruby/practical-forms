// Note the Provider and color
var inputRenderer = React.createClass({
	getInitialState: function () {
		return {
			value: 'test value'
		}
	},
	render: function () {
		return React.createElement('input', {
			type: 'text',
			value: this.state.value,
			onChange: function (event) {
				this.setState('value', event.target.value);
			}
		});
	}
});

ReactDOM.render(
	React.createElement(inputRenderer),
	document.getElementById('mount')
);