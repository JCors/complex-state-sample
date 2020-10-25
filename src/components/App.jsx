/** @format */

import React, { useState } from "react";

function App() {
	
	// Declare a new state variable
	const [contact, setContact] = useState({
		fName: "",
		lName: "",
		email: "",
	});

	// Create function for handleChange
	function handleChange(event) {
		//apply destructing for the object
		const { name, value } = event.target;

		// create statefull
		setContact((prevValue) => {
			return {
				...prevValue, // use spread operator
				[name]: value,
			};
		});
	}

	return (
		<div className="container">
			<h1>
				Hello {contact.fName} {contact.lName}{" "}
			</h1>
			<form>
				<input
					name="fName"
					onChange={handleChange}
					placeholder="First Name"
					value={contact.fName}
				/>
				<input
					name="lName"
					onChange={handleChange}
					placeholder="Last Name"
					value={contact.lName}
				/>

				<input
					name="email"
					onChange={handleChange}
					placeholder="Email"
					value={contact.email}
				/>
				<button>Submit</button>
			</form>
		</div>
	);
}

export default App;
