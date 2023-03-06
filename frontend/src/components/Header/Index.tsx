import Box from "../Box/Index";
import ListMediaList from "../ListMediaList.tsx/ListMediaList";
import ListMedias from "../ListMedias.tsx/ListMedias";
import CreateMidia from "../MediaUpload/Index";
import { Container, SubContainer } from "./styles";

export default function Header() {
	return (
		<Container>
			<Box title='Criar mídia'>
				<CreateMidia />
			</Box>
			<Box title='Inserir mídia'>
				<SubContainer>
					<ListMediaList />
					<ListMedias />
				</SubContainer>
			</Box>
		</Container>
	);
}
