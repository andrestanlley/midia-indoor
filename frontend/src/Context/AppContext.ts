import { createContext, Dispatch, SetStateAction } from "react";
import IID from "../interfaces/IID";
import IMediaProps from "../interfaces/Media";
import IMediaListProps from "../interfaces/MediaList";
import ITerminalProps from "../interfaces/Terminal";

interface IAppContext {
	medias: IMediaProps[];
	setMedias?: Dispatch<SetStateAction<IMediaProps[]>>;
	mediasList: IMediaListProps[];
	setMediaLists?: Dispatch<SetStateAction<IMediaListProps[]>>;
	terminais: ITerminalProps[];
	setTerminais?: Dispatch<SetStateAction<ITerminalProps[]>>;
	selectedMediaList?: IMediaListProps;
	setSelectedMediaList?: Dispatch<SetStateAction<IMediaListProps | undefined>>;
	selectedTerminal?: ITerminalProps;
	setSelectedTerminal?: Dispatch<SetStateAction<ITerminalProps | undefined>>;
	mediasToConnect: IID[];
	setMediasToConnect?: Dispatch<SetStateAction<IID[]>>;
	mediasToDisconnect: IID[];
	setMediasToDisconnect?: Dispatch<SetStateAction<IID[]>>;
}

const defaultState = {
	medias: [],
	mediasList: [],
	terminais: [],
	selectedMediaList: undefined,
	selectedTerminal: undefined,
	mediasToConnect: [],
	mediasToDisconnect: [],
};

export const AppContext = createContext<IAppContext>(defaultState);
