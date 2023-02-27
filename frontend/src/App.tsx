import { useEffect, useState } from "react";
import Player, { TerminalProps } from "./components/Terminal/Index";
import { api } from "./services/api";

function App() {
	const [terminais, setTerminais] = useState<TerminalProps[]>();

	async function getAllTerminais() {
		setInterval(async () => {
			const result = await api.get("/terminal/all");
			if (result.status === 200) {
				setTerminais(result.data);
			}
		}, 10000);
	}

	useEffect(() => {
		getAllTerminais();
	}, []);

	return (
		<>
			{terminais?.length &&
				terminais.map((terminal) => (
					<Player key={terminal.deviceId} {...terminal} />
				))}
		</>
	);
}

export default App;
