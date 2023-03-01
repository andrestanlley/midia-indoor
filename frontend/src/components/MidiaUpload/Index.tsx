import { useState } from "react";
import { api } from "../../services/api";

function CreateMidia() {
	const [video, setVideo] = useState<File>();
	const [midiaName, setMidiaName] = useState({ name: "Video mirante" });

	const uploadImage = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("video", video!);
		formData.append("data", JSON.stringify({ ...midiaName, type: "VIDEO" }));

		const headers = {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		};

		const result = await api.post("/midia", formData, headers);
		console.log(result);
	};

	return (
		<div>
			<h1>Upload</h1>

			<form onSubmit={uploadImage}>
				<label>Nome: </label>
				<input
					type='text'
					onChange={(e) => setMidiaName({ name: e.target.value })}
				/>
				<br></br>
				<br></br>
				<label>Video: </label>
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
