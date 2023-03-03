import { useEffect, useContext } from "react";
import Box from "../Box/Index";
import Player from "../Terminal/Index";
import { api } from "../../services/api";
import { AppContext } from "../../Context/AppContext";

function ListTerminais() {
	const { terminais, setTerminais } = useContext(AppContext);

	async function getAllTerminais() {
		const result = await api.get("/terminal/all");
		if (result.status === 200) {
			setTerminais!(result.data.sort());
		}
	}

	useEffect(() => {
		getAllTerminais();
		const updateTerminaisInterval = setInterval(getAllTerminais, 60000);

		return () => clearInterval(updateTerminaisInterval);
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
