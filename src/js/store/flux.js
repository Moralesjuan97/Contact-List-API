const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: async () => {
				let response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/juans_agenda");
				let data = await response.json();
				setStore({ contacts: data });
				console.log(data);
			},
			addContact: (name, email, phone, address) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "juans_agenda"
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/juans_agenda")
						.then(res => res.json())
						.then(data => {
							setStore({ contacts: data });
						});
				});
			},
			editContact: (id, name, email, phone, address) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						email: email,
						address: address,
						agenda_slug: "juans_agenda"
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/juans_agenda")
						.then(res => res.json())
						.then(data => {
							setStore({ contacts: data });
						});
				});
			},
			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/")
							.then(res => res.json())
							.then(data => {
								return data;
								//setStore({ contacts: data });
							});
					})
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/juans_agenda")
							.then(res => res.json())
							.then(data => {
								//return data
								setStore({ contacts: data });
							});
					});
			}
		}
	};
};

export default getState;
