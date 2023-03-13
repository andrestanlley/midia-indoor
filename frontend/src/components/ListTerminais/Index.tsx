import { useEffect, useContext, useState } from "react";
import Box from "../Box/Index";
import Player from "../Terminal/Index";
import { api } from "../../services/api";
import { AppContext } from "../../Context/AppContext";
import { Container, Header } from "./styles";
import ITerminalProps from "../../interfaces/Terminal";
import Modal from "../Modal/Index";
import { timeToUpdate } from "../../config";
import isTerminalSync from "../../services/isTerminalSync";
import { useNavigate } from "react-router-dom";

function ListTerminais() {
	const [countOnlineTerminais, setOnlineCountTerminais] = useState<number>(0);
	const { terminais, setTerminais, selectedTerminal, setSelectedTerminal } =
		useContext(AppContext);

	const navigate = useNavigate();

	async function getAllTerminais() {
		try {
			const result = await api.get("/terminal/all");
			if (result.status === 200) {
				countTerminaisOnline(result.data);
				setTerminais!(
					result.data.sort(
						(a: ITerminalProps, b: ITerminalProps) =>
							new Date(a.lastSync).getTime() - new Date(b.lastSync).getTime()
					)
				);
			}
		} catch (error: any) {
			if (error.response.status === 401) {
				localStorage.removeItem("token");
				navigate(0);
			}
		}
	}

	function countTerminaisOnline(terminais: ITerminalProps[]) {
		terminais?.forEach((terminal: ITerminalProps) => {
			if (isTerminalSync(new Date(terminal.lastSync))) {
				setOnlineCountTerminais(countOnlineTerminais + 1);
			}
		});
	}

	useEffect(() => {
		setOnlineCountTerminais(0);
		getAllTerminais();
		const updateTerminaisInterval = setInterval(getAllTerminais, timeToUpdate);

		return () => clearInterval(updateTerminaisInterval);
	}, []);

	return (
		<>
			<Modal />
			<Header>
				<h1>Terminais</h1>
				<div>
					<div>
						<p>{countOnlineTerminais}</p>
						<span>online</span>
					</div>
					<div>
						<p>{terminais.length - countOnlineTerminais}</p>
						<span>offline</span>
					</div>
				</div>
			</Header>
			<Container>
				{terminais?.length ? (
					terminais.map((terminal) => (
						<Box key={terminal.deviceId}>
							<Player {...terminal} />
						</Box>
					))
				) : (
					<span>Nenhum terminal encontrado.</span>
				)}
			</Container>
		</>
	);
}

export default ListTerminais;
