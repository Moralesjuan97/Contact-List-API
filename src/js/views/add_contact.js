import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Add = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const { store, actions } = useContext(Context);

	const handleSubmit = () => {
		actions.addContact(name, email, phone, address);
		setName("");
	};

	return (
		<div className="container">
			<h1 className="text-center">Add new Contact</h1>
			<form>
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Full name"
						onChange={e => setName(e.target.value)}
					/>
					<label className="my-1">Email</label>
					<input
						type="text"
						className="form-control"
						placeholder="Email"
						onChange={e => setEmail(e.target.value)}
					/>{" "}
					<label className="my-1">Phone</label>
					<input
						type="text"
						className="form-control"
						placeholder="Phone"
						onChange={e => setPhone(e.target.value)}
					/>{" "}
					<label className="my-1">Address</label>
					<input
						type="text"
						className="form-control"
						placeholder="Address"
						onChange={e => setAddress(e.target.value)}
					/>
					<button type="button" className="mt-2 btn btn-primary btn-block" onClick={handleSubmit}>
						Save
					</button>
					<Link to="/">
						<a href="#" className="badge badge-dark">
							Go back to contacts
						</a>
					</Link>
				</div>
			</form>
		</div>
	);
};
