import { createContext, Dispatch, SetStateAction } from "react";
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
}

const defaultState = {
	medias: [],
	mediasList: [],
	terminais: [],
	selectedMediaList: undefined,
};

export const AppContext = createContext<IAppContext>(defaultState);
