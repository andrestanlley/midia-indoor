import { api } from "../../services/api";
import { AppContext } from "../../Context/AppContext";
import { useEffect, useContext, useState } from "react";
import IMediaProps from "../../interfaces/Media";
import { Container } from "./styles";
import ListMediasOptions from "./ListMediasOptions";
import { error, sucess } from "../Alert/Index";
import { timeToUpdate } from "../../config";

export default function ListMedias() {
	const {
		medias,
		setMedias,
		selectedMediaList,
		mediasToConnect,
		setMediasToConnect,
		mediasToDisconnect,
		setMediasToDisconnect,
		mediaListName,
		setMediaListName,
	} = useContext(AppContext);

	async function getAllMedias() {
		const result = await api.get("/media/all");
		setMedias!(result.data);
	}

	async function createMediaList() {
		try {
			const data = {
				mediaListName,
			};
			const result = await api.post("/medialist", data);
			if (result.status === 201) {
				setMediaListName!("");
				return sucess("Lista de reprodução criada!");
			}
		} catch (err) {
			return error("Erro ao criar lista de reprodução.");
		}
	}

	async function deleteMedia(media: IMediaProps) {
		const result = await api.delete("/media", { data: media });
		if (result.status === 202) {
			getAllMedias();
			return sucess("Mídia deletada.");
		}
		return error("Erro ao deletar mídia.");
	}

	function handlerConnections(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.checked) {
			setMediasToConnect!((oldData) => [...oldData, { id: e.target.id }]);
			setMediasToDisconnect!((oldData) =>
				[...oldData].filter((res) => res.id !== e.target.id)
			);
		} else {
			setMediasToDisconnect!((oldData) => [...oldData, { id: e.target.id }]);
			setMediasToConnect!((oldData) =>
				[...oldData].filter((res) => res.id !== e.target.id)
			);
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

	function filterMedias(search: string) {
		if (!search) {
			getAllMedias();
		}
		setMedias!(medias.filter((md) => md.name.indexOf(search) >= 0));
	}

	useEffect(() => {
		getAllMedias();
		const updateMediasInterval = setInterval(getAllMedias, timeToUpdate);

		return () => {
			clearInterval(updateMediasInterval);
		};
	}, [selectedMediaList, mediasToConnect, mediasToDisconnect]);

	return (
		<Container>
			<input
				type='text'
				placeholder='Buscar mídia'
				onChange={(e) => filterMedias(e.target.value)}
			/>
			<div>
				{medias.length && selectedMediaList ? (
					medias
						.sort(
							(a: IMediaProps, b: IMediaProps) =>
								new Date(a.expiresIn).getTime() -
								new Date(b.expiresIn).getTime()
						)
						.map((media) => (
							<ListMediasOptions
								key={media.id}
								media={media}
								connectionsCB={handlerConnections}
								deleteCB={deleteMedia}
							/>
						))
				) : (
					<span>Selecione uma lista</span>
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
