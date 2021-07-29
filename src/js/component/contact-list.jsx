import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faPhone, faEnvelope, faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ModalExample } from "./delete_modal";

export const Contact = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		getContacts();
	}, []);

	async function getContacts() {
		let res = await actions.getContacts();
	}

	return (
		<div>
			{store.contacts.map((contact, index) => {
				return (
					<div key={index} className="my-2 container border">
						<div className="row">
							<div className="col">
								<a href="https://placeholder.com" className="">
									<img
										src="https://alscofirstaid.com.au/wp-content/uploads/2014/01/placeholder-150x150.png"
										className="my-2 rounded-circle"
									/>
								</a>
							</div>
							<div className="col mt-2">
								<h4>{contact.full_name}</h4>
								<p>
									<span className="mr-1">
										<FontAwesomeIcon icon={faLocationArrow} />
									</span>
									{contact.address}
								</p>
								<p>
									{" "}
									<span className="mr-1">
										<FontAwesomeIcon icon={faPhone} />
									</span>
									870 23423432
								</p>
								<p>
									<span className="mr-1">
										<FontAwesomeIcon icon={faEnvelope} />
									</span>
									{contact.email}
								</p>
							</div>
							<div className="col text-right text-center mt-5">
								<Link to={"/edit" + "/" + contact.id}>
									<div className="mb-2">
										<FontAwesomeIcon icon={faPencilAlt} color="black" />
									</div>
								</Link>
								<span className="">
									<ModalExample id={contact.id} />
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
