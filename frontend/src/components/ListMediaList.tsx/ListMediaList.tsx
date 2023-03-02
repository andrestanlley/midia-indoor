import { api } from "../../services/api";
import { useState, useEffect } from "react";
import IMediaListProps from "../../interfaces/MediaList";

export default function ListMediaList() {
	const [mediaList, setMediaList] = useState<IMediaListProps[]>([]);

	async function getAllMediaLists() {
		const result = await api.get("/medialist/all");
		setMediaList(result.data);
	}

	async function createMediaList(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data = { mediaListName: (e.currentTarget[0] as HTMLInputElement).value };
		console.log(data)
		const result = await api.post("/medialist", data);
		console.log(result);
	}

	function updateMediasInterval() {
		setInterval(getAllMediaLists, 60000);
	}

	useEffect(() => {
		getAllMediaLists();
		updateMediasInterval();
	});
	return (
		<>
			<form onSubmit={createMediaList}>
				<input type='text' id='name' />
				<button type='submit'>Criar</button>
			</form>
			{mediaList.length &&
				mediaList.map((medialist) => <p>{medialist.name}</p>)}
		</>
	);
}
