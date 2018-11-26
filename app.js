// TODO

var GroceryList = (props) => {
	console.log(props.list);
	return(
		<ul>
			{props.list.map((item) => <li>{item}</li>)}
		</ul>
	);
};

let Cucumbers = () => (
	<li>Cucumbers</li>
	);
let Tomatoes = () => (
	<li>Tomatoes</li>
	);

let GroceryListItem = (props) => (
	<li>{props.item}</li>
);

ReactDOM.render(<GroceryList list={['Cucumbers', 'Tomatoes', 'Kale']}/>, document.getElementById('app'));
