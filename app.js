// TODO

var GroceryList = (props) => {
	return(
		<ul>
			{props.list.map(item => <GroceryListItem item={item} />)}
		</ul>
	);
};

// let Cucumbers = () => (
// 	<li>Cucumbers</li>
// 	);
// let Tomatoes = () => (
// 	<li>Tomatoes</li>
// 	);

// let GroceryListItem = (props) => (
// 	<li>{props.item}</li>
// );

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			bought:false
		};
	}

	onListItemHover() {
		console.log('hi');
		let set = !this.state.bought;
		this.setState({bought: !this.state.bought});
	}

	render() {
		let style = {
			fontWeight: this.state.bought ? 'bold' : 'normal'
		};
		return (<li style={style} onClick={this.onListItemHover.bind(this)}>
					{this.props.item}
				</li>);
	}
}

ReactDOM.render(<GroceryList list={['Cucumbers', 'Tomatoes', 'Kale']}/>, document.getElementById('app'));
