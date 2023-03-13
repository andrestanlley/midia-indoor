import { useContext, useState } from "react";
import { api } from "../../services/api";
import { useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { Container } from "./styles";
import { error, sucess } from "../Alert/Index";
import { timeToUpdate } from "../../config";

export default function ListMediaList() {
	const {
		mediasList,
		setMediaLists,
		setSelectedMediaList,
		selectedMediaList,
		setMediaListName,
		mediaListName
	} = useContext(AppContext);

	async function getAllMediaLists() {
		const result = await api.get("/medialist/all");
		setMediaLists!(result.data);
	}

	useEffect(() => {
		const updateMediasInterval = setInterval(getAllMediaLists, timeToUpdate);
		getAllMediaLists();

		return () => clearInterval(updateMediasInterval);
	}, [mediaListName]);

	return (
		<Container>
			<input
				type='text'
				id='name'
				placeholder='Criar lista de reprodução'
				value={mediaListName}
				onChange={(e) => setMediaListName!(e.target.value)}
			/>
			<div>
				{mediasList.length ? (
					mediasList.map((mediasList) => (
						<p
							style={{
								background:
									mediasList.id === selectedMediaList?.id
										? "var(--cinza-um)"
										: "transparent",
							}}
							key={mediasList.id}
							onClick={() => setSelectedMediaList!(mediasList)}
						>
							{mediasList.name}
						</p>
					))
				) : (
					<span>Nenhuma lista de reprodução encontrada.</span>
				)}
			</div>
		</Container>
	);
}
