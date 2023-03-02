import { IMediaProps } from "./Media";

interface IMediaListProps {
	id: string;
	name: string;
	medias?: IMediaProps[];
}

class MidiaList {
	props: IMediaListProps;

	constructor(props: IMediaListProps) {
		this.props = props;
	}
}

export { MidiaList, IMediaListProps };
