import { useState, useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { api } from "../../services/api";
import { Form } from "./styles";
import { toast } from "react-toastify";
import { sucess } from "../Alert/Index";

function CreateMidia() {
	const { setMedias } = useContext(AppContext);
	const [video, setVideo] = useState<File>();
	const [media, setMedia] = useState({ name: "" });
	const [expiresIn, setExpiresIn] = useState<string>();
	const [progress, setProgress] = useState<number>();

	const uploadVideo = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!media.name) {
			return alert("Não é possível criar uma mídia sem nome!");
		}
		if (!video?.name) {
			alert("Selecione um vídeo para enviar.");
		}
		const formData = new FormData();
		formData.append("video", video!);
		formData.append("data", JSON.stringify({ ...media, expiresIn }));

		const result = await api.post("/media", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
			onUploadProgress: (event) => {
				const progress = Math.round((event.loaded * 100) / event.total!);
				setProgress(progress);
				if (progress === 100) {
					sucess("Upload concluido!");
				}
			},
		});
		if (result.status === 201) {
			setMedias!((oldState) => [...oldState, result.data]);
		}
	};

	return (
		<div>
			<Form onSubmit={uploadVideo}>
				<input
					type='text'
					onChange={(e) => setMedia({ name: e.target.value })}
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
				<input type='date' onChange={(e) => setExpiresIn(e.target.value)} />

				{progress && progress != 100 && <span>{progress}%</span>}

				<button type='submit'>Salvar</button>
			</Form>
		</div>
	);
}

export default CreateMidia;
