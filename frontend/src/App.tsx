import { useState } from "react";
import ListTerminais from "./components/ListTerminais/Index";
import { AppContext } from "./Context/AppContext";
import IMediaProps from "./interfaces/Media";
import IMediaListProps from "./interfaces/MediaList";
import ITerminalProps from "./interfaces/Terminal";
import { Container, SubContainer } from "./styles";
import IID from "./interfaces/IID";
import Box from "./components/Box/Index";
import CreateMidia from "./components/MediaUpload/Index";
import ListMediaList from "./components/ListMediaList/Index";
import ListMedias from "./components/ListMedias/Index";

export default function App() {
	const [medias, setMedias] = useState<IMediaProps[]>([]);
	const [mediasList, setMediaLists] = useState<IMediaListProps[]>([]);
	const [terminais, setTerminais] = useState<ITerminalProps[]>([]);
	const [selectedMediaList, setSelectedMediaList] = useState<IMediaListProps>();
	const [selectedTerminal, setSelectedTerminal] = useState<ITerminalProps>();
	const [mediasToConnect, setMediasToConnect] = useState<IID[]>([]);
	const [mediasToDisconnect, setMediasToDisconnect] = useState<IID[]>([]);
	const [mediaListName, setMediaListName] = useState<string>("");

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
				mediaListName,
				setMediaListName,
			}}
		>
			<Container>
				<SubContainer>
					<Box title='Sincronizar mídia' id='header'>
						<CreateMidia />
						<ListMediaList />
						<ListMedias />
					</Box>
					<ListTerminais />
				</SubContainer>
			</Container>
		</AppContext.Provider>
	);
}
