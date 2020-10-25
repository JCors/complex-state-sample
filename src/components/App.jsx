/** @format */

import React, { useState } from "react";

function App() {

    // Create destructing for Array for first name, last name, and email
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
			if (name === "fName") {
				return {
					fName: value,
                    lName: prevValue.lName,
                    email: prevValue.email
				};
			} else if (name === "lName") {
				return {
					fName: prevValue.fName,
					lName: value,
					email: prevValue.email,
				};
			} else if (name === "email") {
				return {
					fName: prevValue.fName,
					lName: prevValue.lName,
					email: value,
				};
			}
		});
	}

	return (
		<div className="container">
			<h1>
				Hello {contact.fName} {contact.lName}{" "}
			</h1>
			<p>{contact.email}</p>
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
