import MidiaType from "@main/enums/midiaTypes";
import { IMediaListProps } from "./MediaList";

interface IMediaProps {
	id: string;
	name: string;
	filename: string;
	uri?: string;
	type: MidiaType;
	mediaListId?: string;
}

class Media {
	props: IMediaProps;

	constructor(props: IMediaProps) {
		this.props = props;
	}
}

export { Media, IMediaProps };
