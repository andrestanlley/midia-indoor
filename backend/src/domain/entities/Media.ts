import MidiaType from "@main/enums/midiaTypes";
import { IMediaListProps } from "./MediaList";

interface IMediaProps {
	id: string;
	name: string;
	filename: string;
	uri?: string;
	mediaListId: string
}

// id          String     @id
// name        String
// filename    String
// type        String
// mediaListId String?
// MediaList   MediaList? @relation(fields: [mediaListId], references: [id])
// Terminal    Terminal[]

class Media {
	props: IMediaProps;

	constructor(props: IMediaProps) {
		this.props = props;
	}
}

export { Media, IMediaProps };
