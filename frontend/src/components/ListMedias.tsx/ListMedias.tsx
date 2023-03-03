import { api } from "../../services/api";
import { AppContext } from "../../Context/AppContext";
import { useEffect, useContext } from "react";
import IMediaProps from "../../interfaces/Media";
import { IoMdRemoveCircle } from "react-icons/io";
import { ListOption, Container } from "./styles";

export default function ListMedias() {
	const { medias, setMedias, selectedMediaList } = useContext(AppContext);

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

	useEffect(() => {
		getAllMedias();
		const updateMediasInterval = setInterval(getAllMedias, 60000);

		return () => clearInterval(updateMediasInterval);
	}, [selectedMediaList]);

	return (
		<Container>
			{medias.length &&
				medias.map((media) => (
					<ListOption key={media.id}>
						<label>
							<input
								type='checkbox'
								id={media.id}
								defaultChecked={
									selectedMediaList?.medias?.find(
										(selectedMedia) => selectedMedia.id === media.id
									)
										? true
										: false
								}
							/>
							{media.name}
						</label>
						<p>
							<IoMdRemoveCircle
								color='var(--vermelho)'
								onClick={() => deleteMedia(media)}
							/>
						</p>
					</ListOption>
				))}
		</Container>
	);
}
