import { api } from "../../services/api";
import { useState, useEffect } from "react";
import IMediaProps from "../../interfaces/Media";
import { IoMdRemoveCircle } from "react-icons/io";
import { ListOption } from "./styles";

export default function ListMedias() {
	const [medias, setMedias] = useState<IMediaProps[]>([]);

	async function getAllMedias() {
		const result = await api.get("/media/all");
		setMedias(result.data);
	}

	async function deleteMedia(media: IMediaProps) {
		const result = await api.delete("/media", { data: media });
		if (result.status === 202) {
			setMedias((oldState) =>
				[...oldState].filter((oldMedia) => oldMedia.id != media.id)
			);
		}
	}

	function updateMediasInterval() {
		setInterval(getAllMedias, 60000);
	}

	useEffect(() => {
		getAllMedias();
		updateMediasInterval();
	}, []);

	return (
		<>
			{medias.length &&
				medias.map((media) => (
					<ListOption key={media.id}>
						<p>{media.name}</p>
						<p>
							<IoMdRemoveCircle
								color='#dc2626'
								onClick={() => deleteMedia(media)}
							/>
						</p>
					</ListOption>
				))}
		</>
	);
}
