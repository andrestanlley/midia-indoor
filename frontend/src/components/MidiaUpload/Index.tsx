import { useState } from "react";
import { api } from "../../services/api";

function CreateMidia() {
	const [video, setVideo] = useState<File>();
	const [midiaName, setMidiaName] = useState({ name: "Video mirante" });

	const uploadImage = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("video", video!);
		formData.append("data", JSON.stringify({ ...midiaName, type: "VIDEO" }));

		const headers = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const result = await api.post("/media", formData, headers);
		console.log(result);
	};

	return (
		<div>
			<form onSubmit={uploadImage}>
				<input
					type='text'
					onChange={(e) => setMidiaName({ name: e.target.value })}
				/>
				<br></br>
				<br></br>
				<input
					type='file'
					name='image'
					onChange={(e) => setVideo(e.target.files![0])}
				/>
				<br />
				<br />

				<button type='submit'>Salvar</button>
			</form>
		</div>
	);
}

export default CreateMidia;
