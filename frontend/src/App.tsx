import { useEffect, useState } from "react";
import Modal from "./components/Modal/Index";
import Player, { TerminalProps } from "./components/Terminal/Index";
import { api } from "./services/api";

function App() {
	const [terminais, setTerminais] = useState<TerminalProps[]>();

	async function getAllTerminais() {
		const result = await api.get("/terminal/all");
		if (result.status === 200) {
			setTerminais(result.data);
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
			{/* <Modal>
				Teste!
				</Modal> */}
			{terminais?.length &&
				terminais.map((terminal) => (
					<Player key={terminal.deviceId} {...terminal} />
				))}
		</>
	);
}

export default App;
