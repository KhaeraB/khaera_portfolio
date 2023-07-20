import React from "react";
import { logoFont } from "../../fonts/KbFonts";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Khaera_blk",
	description: "Portfolio of my projects",
};

const AddProjectPage = () => {
	return (
		<div className="justify-center items-center mx-12 py-16 my-16 md:flex-row md:space-x-4 md:text-left">
			<h1 className={`${logoFont.className} text-lg`}>Ajouter un projet</h1>
			<form action="" className="flex flex-col">
				<label htmlFor="title">Titre</label>
				<input
					required
					name="title"
					placeholder="Titre"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					type="text"
				/>
			</form>
		</div>
	);
};

export default AddProjectPage;
