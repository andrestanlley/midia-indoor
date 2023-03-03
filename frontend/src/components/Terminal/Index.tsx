import { MdMonitor } from "react-icons/md";
import ITerminalProps from "../../interfaces/Terminal";
import isTerminalSync from "../../services/isTerminalSync";
import { Container } from "./styles";

export default function Terminal({ name, deviceId, lastSync }: ITerminalProps) {
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
		<Container onClick={(e) => console.log(deviceId)}>
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
