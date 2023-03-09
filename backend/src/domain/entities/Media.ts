interface IMediaProps {
	id: string;
	name: string;
	expiresIn: Date;
	filename: string;
	uri?: string;
	size: number;
	mediaListId: string;
}

class Media {
	constructor(private readonly props: IMediaProps) {
		this.props = props;
	}

	get id() {
		return this.props.id;
	}

	get name() {
		return this.props.name;
	}

	get expiresIn() {
		return this.props.expiresIn;
	}

	get filename() {
		return this.props.filename;
	}

	get uri() {
		return this.props.uri;
	}

	get mediaListId() {
		return this.props.mediaListId;
	}
}

export { Media, IMediaProps };
