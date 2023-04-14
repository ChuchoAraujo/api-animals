import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { CardAnimal } from "../component/CardAnimal.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const [animal, setAnimal] = useState([])
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')
	const [url, setUrl] = useState('')

	useEffect(() => {

		fetch(process.env.BACKEND_URL + "/api/animals", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setAnimal(data['animals']);
			})
			.catch((error) => console.log("error", error));

	}, [])

	const handleAddAnimal = () => {
		fetch(process.env.BACKEND_URL + "/api/animals", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"name": name,
				"description": description,
				"url": url
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				setAnimal([...animal, data]);
			})
			.catch((error) => console.log("error", error));
	};

	


	return (
		<>
			<h1 className="text-center m-5">Animales y más... </h1>
			<div className="container text-center m-5 mx-auto">
				<form>
					<input value={name} onChange={(e)=> setName(e.target.value)} className="form-control m-2" placeholder="Escribe el nombre" />
					<input value={description} onChange={(e) => setDescription(e.target.value)} className="form-control m-2" placeholder="Agrega una descripción" />
					<input value={url} onChange={(e) => setUrl(e.target.value)} className="form-control m-2" placeholder="Pega una url" />
					<button onClick={handleAddAnimal} className="btn btn-warning m-3">Agregar animal</button>
				</form>
			</div>
			
			<CardAnimal animal= {animal}/>
		</>
	);
};
