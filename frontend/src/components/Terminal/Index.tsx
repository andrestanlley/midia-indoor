import { MdMonitor } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import ITerminalProps from "../../interfaces/Terminal";
import { api } from "../../services/api";
import isTerminalSync from "../../services/isTerminalSync";
import { Container } from "./styles";

export default function Terminal(terminal: ITerminalProps) {
	const { name, deviceId, lastSync } = terminal;
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

	return (
		<Container onClick={(e) => setSelectedTerminal!(terminal)}>
			<MdMonitor
				size={28}
				color={status ? "var(--verde)" : "var(--vermelho)"}
			/>
			<div>
				{name}
				<br />
				<span>{syncToday}</span>
			</div>
		</Container>
	);
}
