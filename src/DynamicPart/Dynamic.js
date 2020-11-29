import React, { Component } from "react";

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
			//display the usernames if we want to from the comment block below
			<div>
				{/* {dynuser.map((user) => (
					<p key={user.name}>
						Name: {user.name} Video: {user.video}
					</p>
				))} */}
				{this.selectDynUser()} {/* displays the select method */}
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
				<option>Select a name for more information</option>
				{dynuser.map((user) => (
					<option key={user.name}>{user.name}</option>
				))}
			</select>
		);
	}

	selectedDynUser(chosenDynUser) {
		if (!chosenDynUser) return <p>No name is selected, please choose a name</p>;

		// need to convert state to string or something, then use it to get the row from the array
		//console.log(dynuser[3].name); //this is how you log what you select the index of the object (to get the right array) and then select the array component required

		const samegs = chosenDynUser.toString();
		//console.log("name:", { samegs });

		const moreInfoDynUser = dynuser
			.filter((selectedUser) => selectedUser.name == samegs)
			.map((filteredName) => (
				<p key={filteredName}>
					Name: {filteredName.name} <br /> Age: {filteredName.age} <br /> Video:{" "}
					<a href={filteredName.video}>Link</a>
				</p>
			));

		return <span>{moreInfoDynUser}</span>;
	}
}

// https://stackoverflow.com/questions/63764175/key-value-pair-string-generation-out-of-an-array-react-js
// the above link shows how to join array values together into specific formats

// https://stackoverflow.com/questions/39270107/finding-an-object-in-array-and-taking-values-from-that-to-present-in-a-select-li
// https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples
// the above links are for filter & find within arrays
