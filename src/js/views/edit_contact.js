import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Edit = props => {
	const { store, actions } = useContext(Context);
	let contact_id = props.match.params.id;
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const [toggle, settoggle] = useState(false);

	const toggleMessage = () => settoggle(!toggle);

	useEffect(() => {
		getContact();
	}, []);

	const getContact = () => {
		fetch("https://assets.breatheco.de/apis/fake/contact/" + props.match.params.id)
			.then(res => res.json())
			.then(data => {
				console.log(data.full_name);
				setName(data.full_name);
				setEmail(data.email);
				setPhone(data.phone);
				setAddress(data.address);
			});
	};

	const handleEdit = () => {
		actions.editContact(contact_id, name, email, phone, address);
		toggleMessage();
	};

	return (
		<div className="container">
			<form>
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						className="form-control"
						placeholder="Full name"
						defaultValue={name}
						onChange={e => setName(e.target.value)}
					/>
					<label>Email</label>
					<input
						type="text"
						className="form-control"
						placeholder="Email"
						defaultValue={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<label>Phone</label>
					<input
						type="text"
						className="form-control"
						placeholder="Phone"
						defaultValue={phone}
						onChange={e => setPhone(e.target.value)}
					/>
					<label>Address</label>
					<input
						type="text"
						className="form-control"
						placeholder="Address"
						defaultValue={address}
						onChange={e => setAddress(e.target.value)}
					/>
					<button type="button" className="mt-2 btn btn-primary btn-block" onClick={handleEdit}>
						Save changes
					</button>
					{toggle && (
						<div className="mt-2 alert alert-success" role="alert">
							Edited succesfully!
						</div>
					)}
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

Edit.propTypes = {
	match: PropTypes.object
};
