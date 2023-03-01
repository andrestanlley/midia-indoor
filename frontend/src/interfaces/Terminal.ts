import IMediaProps from "./Media";
import IMediaListProps from "./MediaList";

export default interface ITerminalProps {
	name: string;
	deviceId: string;
	actualMedia?: IMediaProps;
	localVideos?: IMediaProps[];
	mediaListId?: string | undefined | null;
	MediaList?: IMediaListProps;
	lastSync: Date;
}
