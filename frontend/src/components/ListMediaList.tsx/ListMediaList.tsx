import { useContext } from "react";
import { api } from "../../services/api";
import { useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { Container } from "./styles";

export default function ListMediaList() {
	const { mediasList, setMediaLists, setSelectedMediaList } =
		useContext(AppContext);

	async function getAllMediaLists() {
		const result = await api.get("/medialist/all");
		setMediaLists!(result.data);
	}

	async function createMediaList(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data = {
			mediaListName: (e.currentTarget[0] as HTMLInputElement).value,
		};
		await api.post("/medialist", data);
	}

	useEffect(() => {
		const updateMediasInterval = setInterval(getAllMediaLists, 60000);
		getAllMediaLists();

		return () => clearInterval(updateMediasInterval);
	}, []);

	return (
		<Container>
			<form onSubmit={createMediaList}>
				<input type='text' id='name' placeholder='Criar lista de reprodução' />
			</form>
			<div>
				{mediasList.length &&
					mediasList.map((mediasList) => (
						<p
							key={mediasList.id}
							onClick={() => setSelectedMediaList!(mediasList)}
						>
							{mediasList.name}
						</p>
					))}
			</div>
		</Container>
	);
}
