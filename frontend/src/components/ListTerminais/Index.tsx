import { useEffect, useState } from "react";
import Box from "../Box/Index";
import Player from "../Terminal/Index";
import ITerminalProps from "../../interfaces/Terminal";
import { api } from "../../services/api";

function ListTerminais() {
	const [terminais, setTerminais] = useState<ITerminalProps[]>();

	async function getAllTerminais() {
		const result = await api.get("/terminal/all");
		if (result.status === 200) {
			setTerminais(result.data.sort());
		}
	}

	function updateTerminaisInterval() {
		setInterval(getAllTerminais, 60000);
	}

	useEffect(() => {
		getAllTerminais();
		updateTerminaisInterval();
	}, []);

	return (
		<>
			{terminais?.length ? (
				terminais.map((terminal) => (
					<Box key={terminal.deviceId}>
						<Player {...terminal} />
					</Box>
				))
			) : (
				<span>Nenhum terminal encontrado.</span>
			)}
		</>
	);
}

export default ListTerminais;
