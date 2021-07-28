import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const ModalExample = props => {
	const [modal, setModal] = useState(false);
	const { store, actions } = useContext(Context);

	const toggle = () => setModal(!modal);

	const handleDelete = () => {
		actions.deleteContact(props.id);
	};

	return (
		<div>
			<Button color="danger" onClick={toggle}>
				<FontAwesomeIcon icon={faTrash} color="black" />
			</Button>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader toggle={toggle}>Warning</ModalHeader>
				<ModalBody>Are you sure you want to delete this contact?</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={handleDelete}>
						Delete
					</Button>{" "}
					<Button color="secondary" onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
};

ModalExample.propTypes = {
	match: PropTypes.object,
	id: PropTypes.number
};
