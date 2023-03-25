import { IMediaProps } from "./Media";
import { randomUUID } from "node:crypto";

interface ITerminalProps {
	name: string;
	deviceId: string;
	actualMedia?: string;
	lastSync: Date;
	localVideos?: IMediaProps[];
	mediaListId?: string | undefined | null;
	Medias?: IMediaProps[];
}

class Terminal implements ITerminalProps {
	private _deviceId: string;
	private props: ITerminalProps;

	constructor(props: ITerminalProps) {
		this.props = props;

		if (!props.deviceId) {
			this._deviceId = randomUUID();
			this.props.lastSync = new Date();
			this.props.name = "Novo Terminal";
			this.props.mediaListId = null;
		} else {
			this._deviceId = props.deviceId;
			this.props.lastSync = props.lastSync;
			this.props.name = props.name;
			this.props.mediaListId = props.mediaListId;
		}
		this.props.actualMedia = props.actualMedia;
		this.props.localVideos = props.localVideos;
		this.props.Medias = props.Medias;
	}

	public get name() {
		return this.props.name;
	}

	public get deviceId() {
		return this._deviceId;
	}

	public get actualMedia() {
		return this.props.actualMedia;
	}

	public get lastSync() {
		return this.props.lastSync;
	}

	public get localVideos() {
		return this.props.localVideos;
	}

	public get mediaListId() {
		return this.props.mediaListId;
	}

	public get Medias() {
		return this.props.Medias;
	}
}

export { Terminal, ITerminalProps };
