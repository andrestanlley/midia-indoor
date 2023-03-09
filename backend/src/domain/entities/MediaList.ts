import { IMediaProps } from "./Media";

interface IMediaListProps {
	id: string;
	name: string;
	medias?: IMediaProps[];
}

class MediaList {
	constructor(private readonly props: IMediaListProps) {
		this.props = props;
	}

	get id() {
		return this.props.id;
	}

	get name() {
		return this.props.name;
	}

	get medias() {
		return this.props.medias;
	}
}

export { MediaList, IMediaListProps };
