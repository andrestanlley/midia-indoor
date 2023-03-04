import { api } from "../../services/api";
import { AppContext } from "../../Context/AppContext";
import { useEffect, useContext, useState } from "react";
import IMediaProps from "../../interfaces/Media";
import { Container } from "./styles";
import ListMediasOptions from "./ListMediasOptions";

export default function ListMedias() {
	const {
		medias,
		setMedias,
		selectedMediaList,
		mediasToConnect,
		setMediasToConnect,
		mediasToDisconnect,
		setMediasToDisconnect
	} = useContext(AppContext);

	async function getAllMedias() {
		const result = await api.get("/media/all");
		setMedias!(result.data);
	}

	async function deleteMedia(media: IMediaProps) {
		const result = await api.delete("/media", { data: media });
		if (result.status === 202) {
			setMedias!((oldState) =>
				[...oldState].filter((oldMedia) => oldMedia.id != media.id)
			);
		}
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

	useEffect(() => {
		getAllMedias();
		const updateMediasInterval = setInterval(getAllMedias, 60000);

		return () => {
			clearInterval(updateMediasInterval);
		};
	}, [selectedMediaList, mediasToConnect, mediasToDisconnect]);

	return (
		<Container>
			{medias.length && selectedMediaList ? (
				medias.map((media) => (
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
		</Container>
	);
}
