import { useState } from "react";
import ListTerminais from "./components/ListTerminais/Index";
import { AppContext } from "./Context/AppContext";
import IMediaProps from "./interfaces/Media";
import IMediaListProps from "./interfaces/MediaList";
import ITerminalProps from "./interfaces/Terminal";
import Header from "./components/Header/Index";
import { Container, SubContainer } from "./styles";
import IID from "./interfaces/IID";
import { useNavigate } from "react-router-dom";

export default function App() {
	const [medias, setMedias] = useState<IMediaProps[]>([]);
	const [mediasList, setMediaLists] = useState<IMediaListProps[]>([]);
	const [terminais, setTerminais] = useState<ITerminalProps[]>([]);
	const [selectedMediaList, setSelectedMediaList] = useState<IMediaListProps>();
	const [selectedTerminal, setSelectedTerminal] = useState<ITerminalProps>();
	const [mediasToConnect, setMediasToConnect] = useState<IID[]>([]);
	const [mediasToDisconnect, setMediasToDisconnect] = useState<IID[]>([]);
	const navigate = useNavigate();

	const token = localStorage.getItem("token");

	if (!token) {
		navigate("/login");
	}

	return (
		<AppContext.Provider
			value={{
				medias,
				setMedias,
				mediasList,
				setMediaLists,
				terminais,
				setTerminais,
				selectedMediaList,
				setSelectedMediaList,
				selectedTerminal,
				setSelectedTerminal,
				mediasToConnect,
				setMediasToConnect,
				mediasToDisconnect,
				setMediasToDisconnect,
			}}
		>
			<Container>
				<SubContainer>
					<Header />
					<ListTerminais />
				</SubContainer>
			</Container>
		</AppContext.Provider>
	);
}
