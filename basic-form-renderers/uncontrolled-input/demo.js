// Note the Provider and color
var inputRenderer = React.createClass({
	render: function () {
		return React.createElement('input', {
			type: 'text',
			defaultValue: 'test value'
		});
	}
});

ReactDOM.render(
	React.createElement(inputRenderer),
	document.getElementById('mount')
);