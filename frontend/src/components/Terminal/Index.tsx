import { MdMonitor } from "react-icons/md";
import { Container } from "./styles";

export interface TerminalProps {
	name: string;
	deviceId: string;
	lastSync: string;
}

export default function Terminal({ name, deviceId, lastSync }: TerminalProps) {
	const lastSyncDate = new Date(lastSync);
	const status =
		new Date().getUTCMinutes() - lastSyncDate.getUTCMinutes() >= 2
			? false
			: true;

	const syncToday =
		lastSyncDate.toISOString().split("T")[0] ===
		new Date().toISOString().split("T")[0]
			? `Hoje, às ${lastSyncDate.getHours()}:${lastSyncDate.getMinutes()}`
			: lastSyncDate.toISOString().split("T")[0];

	return (
		<Container onClick={(e) => console.log(deviceId)}>
			<MdMonitor size={28} color={status ? "#047857" : "#dc2626"} />
			<div>
				{name}
				<br />
				<span>{syncToday}</span>
			</div>
		</Container>
	);
}
