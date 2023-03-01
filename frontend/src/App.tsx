import { useEffect, useState } from "react";
import Box from "./components/Box/Index";
import CreateMidia from "./components/MidiaUpload/Index";
import Modal from "./components/Modal/Index";
import Player from "./components/Terminal/Index";
import ITerminalProps from "./interfaces/Terminal";
import { api } from "./services/api";

function App() {
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
			<Box>
				<CreateMidia />
			</Box>
			{/* <Modal>
				Teste!
				</Modal> */}
			{terminais?.length &&
				terminais.map((terminal) => (
					<Box key={terminal.deviceId}>
						<Player {...terminal} />
					</Box>
				))}
		</>
	);
}

export default App;
