import { useState } from "react";
import ListTerminais from "./components/ListTerminais/Index";
import { AppContext } from "./Context/AppContext";
import IMediaProps from "./interfaces/Media";
import IMediaListProps from "./interfaces/MediaList";
import ITerminalProps from "./interfaces/Terminal";
import Header from "./components/Header/Index";
import { Container, SubContainer } from "./styles";

export default function App() {
	const [medias, setMedias] = useState<IMediaProps[]>([]);
	const [mediasList, setMediaLists] = useState<IMediaListProps[]>([]);
	const [terminais, setTerminais] = useState<ITerminalProps[]>([]);
	const [selectedMediaList, setSelectedMediaList] = useState<IMediaListProps>();

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
				setSelectedMediaList
			}}
		>
			<Container>
				<SubContainer>
					<Header />
					<ListTerminais />
				</SubContainer>
			</Container>
			{/* <Modal>
        Teste!
        </Modal> */}
		</AppContext.Provider>
	);
}
