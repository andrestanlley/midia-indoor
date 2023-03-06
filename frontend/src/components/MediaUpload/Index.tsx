import { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { api } from "../../services/api";
import { Form } from "./styles";

function CreateMidia() {
	const { setMedias } = useContext(AppContext);
	const [video, setVideo] = useState<File>();
	const [midia, setMidia] = useState({ name: "" });

	const uploadVideo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!midia.name) {
			return alert("Não é possível criar uma mídia sem nome!");
		}
		if (!video?.name) {
			alert("Selecione um vídeo para enviar.");
		}
		const formData = new FormData();
		formData.append("video", video!);
		formData.append("data", JSON.stringify({ ...midia, type: "VIDEO" }));

		const headers = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const result = await api.post("/media", formData, headers);
		if (result.status === 201) {
			setMedias!((oldState) => [...oldState, result.data]);
		}
	};

	return (
		<div>
			<Form onSubmit={uploadVideo}>
				<input
					type='text'
					onChange={(e) => setMidia({ name: e.target.value })}
					placeholder='Nome da mídia'
				/>
				<label>
					{video?.name ?? "Selecionar vídeo"}
					<input
						type='file'
						name='Video'
						onChange={(e) => setVideo(e.target.files![0])}
					/>
				</label>
				<input type='date' />

				<button type='submit'>Salvar</button>
			</Form>
		</div>
	);
}

export default CreateMidia;
