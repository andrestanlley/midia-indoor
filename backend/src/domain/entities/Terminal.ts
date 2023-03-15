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
	constructor(private readonly props: ITerminalProps) {
		this.props = props;

		if (!props.deviceId) {
			this.props = {
				deviceId: randomUUID(),
				lastSync: new Date(),
				name: "Novo Terminal",
				mediaListId: null,
			};
		}
	}

	get name() {
		return this.props.name;
	}

	get deviceId() {
		return this.props.deviceId;
	}

	get actualMedia() {
		return this.props.actualMedia;
	}

	get lastSync() {
		return this.props.lastSync;
	}

	get localVideos() {
		return this.props.localVideos;
	}

	get mediaListId() {
		return this.props.mediaListId;
	}

	get Medias() {
		return this.props.Medias;
	}
}

export { Terminal, ITerminalProps };
