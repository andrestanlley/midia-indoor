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
		mediasToConnect,
		mediasToDisconnect,
	} = useContext(AppContext);
	const [mediaListName, setMediaListName] = useState<string>("");

	async function getAllMediaLists() {
		const result = await api.get("/medialist/all");
		setMediaLists!(result.data);
	}

	async function createMediaList() {
		try {
			const data = {
				mediaListName,
			};
			const result = await api.post("/medialist", data);
			if (result.status === 201) {
				setMediaListName("");
				getAllMediaLists();
				return sucess("Lista de reprodução criada!");
			}
		} catch (err) {
			return error("Erro ao criar lista de reprodução.");
		}
	}

	async function updateMediasInMediaList() {
		const data = {
			mediaListId: selectedMediaList?.id,
			mediasToConnect,
			mediasToDisconnect,
		};
		const result = await api.post("/medialist/insert", data);
		if (result.status === 200) {
			getAllMediaLists();
			return sucess("mídias sincronizadas com a lista.");
		}
	}

	function createOrUpdateMedialist() {
		if (mediaListName) {
			createMediaList();
		}
		if (mediasToConnect.length || mediasToDisconnect.length) {
			updateMediasInMediaList();
		}
	}

	function isApplyButtonEnabled() {
		return mediaListName || mediasToConnect.length || mediasToDisconnect.length
			? true
			: false;
	}

	useEffect(() => {
		const updateMediasInterval = setInterval(getAllMediaLists, timeToUpdate);
		getAllMediaLists();

		return () => clearInterval(updateMediasInterval);
	}, []);

	return (
		<Container>
			<input
				type='text'
				id='name'
				placeholder='Criar lista de reprodução'
				value={mediaListName}
				onChange={(e) => setMediaListName(e.target.value)}
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
			<button
				onClick={createOrUpdateMedialist}
				disabled={!isApplyButtonEnabled()}
			>
				Aplicar
			</button>
		</Container>
	);
}
