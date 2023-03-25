import { randomUUID } from "node:crypto";

interface IMediaProps {
	id: string;
	name: string;
	expiresIn: Date;
	filename: string;
	uri?: string;
	size: number;
	mediaListId: string;
}

class Media implements IMediaProps {
	private _id: string;
	private props: IMediaProps

	constructor(props: IMediaProps) {
		this._id = props.id ?? randomUUID();
		this.props = props
	}

	public get id() {
		return this._id;
	}

	public get name() {
		return this.props.name;
	}

	public get expiresIn() {
		return this.props.expiresIn;
	}

	public get filename() {
		return this.props.filename;
	}

	public get uri() {
		return this.props.uri;
	}

	public get size() {
		return this.props.size;
	}

	public get mediaListId() {
		return this.props.mediaListId;
	}
}

export { Media, IMediaProps };
