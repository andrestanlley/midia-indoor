import { MdMonitor } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import ITerminalProps from "../../interfaces/Terminal";
import { api } from "../../services/api";
import isTerminalSync from "../../services/isTerminalSync";
import { Container } from "./styles";

export default function Terminal(terminal: ITerminalProps) {
	const { name, deviceId, lastSync } = terminal
	const { setTerminais, setSelectedTerminal } = useContext(AppContext);
	const lastSyncDate = new Date(lastSync);
	const status = isTerminalSync(lastSyncDate);

	const syncToday =
		lastSyncDate.toISOString().split("T")[0] ===
		new Date().toISOString().split("T")[0]
			? `Hoje, às ${lastSyncDate.getHours()}:${
					lastSyncDate.getMinutes() < 10
						? "0" + lastSyncDate.getMinutes()
						: lastSyncDate.getMinutes()
			  }`
			: lastSyncDate.toLocaleDateString("pt-BR");

	async function renameTerminal(
		e: React.FormEvent<HTMLFormElement>,
		deviceId: string
	) {
		e.preventDefault();
		const data = {
			deviceId,
			name: (e.currentTarget[0] as HTMLInputElement).value,
		};
		const result = await api.put("/terminal", data);
		if (result.status === 200) {
			alert("Terminal renomeado!");
			setTerminais!((oldData) =>
				[...oldData].map((terminal) =>
					terminal.deviceId === result.data.deviceId
						? { ...terminal, name: data.name }
						: terminal
				)
			);
		}
	}

	return (
		<Container>
			<MdMonitor
				size={28}
				color={status ? "var(--verde)" : "var(--vermelho)"}
				onClick={(e) => setSelectedTerminal!(terminal)}
			/>
			<form onSubmit={(e) => renameTerminal(e, deviceId)}>
				<input type='text' placeholder={name} />
				<br />
				<span>{syncToday}</span>
			</form>
		</Container>
	);
}
