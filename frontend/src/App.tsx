import Box from "./components/Box/Index";
import CreateMidia from "./components/MidiaUpload/Index";
import ListTerminais from "./components/ListTerminais/Index";
import ListMedias from "./components/ListMedias.tsx/ListMedias";
import ListMediaList from "./components/ListMediaList.tsx/ListMediaList";

export default function App() {
	return (
		<>
			<Box>
				<CreateMidia />
			</Box>
			<ListMedias />
			<ListMediaList />
			{/* <Modal>
        Teste!
        </Modal> */}
			<ListTerminais />
		</>
	);
}
