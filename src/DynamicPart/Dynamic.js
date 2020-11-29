import { Component } from "react";

//below is a list of users/entities that can be selected from
const dynuser = [
	{
		name: "john",
		age: "17",
		video: "https://www.youtube.com/watch?v=1TYObnD0RCA",
	},
	{
		name: "john2",
		age: "72",
		video: "https://www.youtube.com/watch?v=6aPZR3qAIXg",
	},
	{
		name: "johnw",
		age: "47",
		video: "https://www.youtube.com/watch?v=Qqgm170PZwk",
	},
	{
		name: "state",
		age: "0",
		video: "https://stackoverflow.com/questions/57373072/state-is-not-defined",
	},
];

//below is the class that contains state (functional class) and the render method which allows us to display the username, and links to what displays it
export default class DynUser extends Component {
	state = {
		chosenDynUser: "",
	};

	render() {
		return (
			<div>
				{dynuser.map((user) => (
					<p>
						Name: {user.name} Video: {user.video}
					</p>
				))}
				{this.selectDynUser()} {/* displays the select method */}
				<p>Select from the names above to get their age and video link</p>
				{this.selectedDynUser(this.state.chosenDynUser)}
				{/* displays the selected information */}
			</div>
		);
	}

	/*below has the select method */
	selectDynUser() {
		console.log(this.state.chosenDynUser); //this logs what is currently selected to console
		//Please note that the state(chosenDynUser) is no longer an array, so it cannot be used to map and extract data
		return (
			<select
				onChange={(e) => [this.setState({ chosenDynUser: e.target.value })]}
			>
				<option>Select a name</option>
				{dynuser.map((user) => (
					<option>
						Name: {user.name} Age: {user.age}
					</option>
				))}
			</select>
		);
	}

	selectedDynUser(chosenDynUser) {
		// const showMe = chosenDynUser.map((chosen) => (
		// 	<option>
		// 		Name: {chosen.name} Age: {chosen.age} video: {chosen.video}
		// 	</option>
		// ));

		if (!chosenDynUser) return <p>choose plz</p>;

		//const showMe = chosenDynUser.map((chill) => <p>{chill.video}</p>);

		return <span>{chosenDynUser}</span>;
	}
}
