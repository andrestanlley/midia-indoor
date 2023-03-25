import { IMediaProps } from "./Media";
import { randomUUID } from "node:crypto";

interface IMediaListProps {
	id: string;
	name: string;
	medias?: IMediaProps[];
}

class MediaList implements IMediaListProps {
	private _id: string;
	private props: IMediaListProps

	constructor(props: IMediaListProps) {
		this.props = props
		this._id = props.id ?? randomUUID();
	}

	public get id() {
		return this._id;
	}

	public get name() {
		return this.props.name;
	}

	public get medias() {
		return this.props.medias;
	}
}

export { MediaList, IMediaListProps };
