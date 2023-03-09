import { useEffect, useContext } from "react";
import Box from "../Box/Index";
import Player from "../Terminal/Index";
import { api } from "../../services/api";
import { AppContext } from "../../Context/AppContext";
import { Container } from "./styles";
import ITerminalProps from "../../interfaces/Terminal";
import Modal from "../Modal/Index";
import { useNavigate } from "react-router-dom";

function ListTerminais() {
	const { terminais, setTerminais } = useContext(AppContext);
	const navigate = useNavigate();

	async function getAllTerminais() {
		try {
			const result = await api.get("/terminal/all");
			if (result.status === 200) {
				setTerminais!(
					result.data.sort(
						(a: ITerminalProps, b: ITerminalProps) =>
							new Date(a.lastSync).getTime() - new Date(b.lastSync).getTime()
					)
				);
			}
		} catch (error) {
			navigate("/login");
		}
	}

	useEffect(() => {
		getAllTerminais();
		const updateTerminaisInterval = setInterval(getAllTerminais, 60000);

		return () => clearInterval(updateTerminaisInterval);
	}, []);

	return (
		<>
			<Modal />
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
