import { IMediaProps } from "./Media";
import { IMediaListProps } from "./MediaList";

interface ITerminalProps {
	name: string;
	deviceId: string;
	actualMedia?: IMediaProps;
	localVideos?: IMediaProps[];
	mediaListId?: string | undefined | null;
	MediaList?: IMediaListProps;
}

class Terminal {
	props: ITerminalProps;

	constructor(props: ITerminalProps) {
		this.props = props;
	}
}

export { Terminal, ITerminalProps };
