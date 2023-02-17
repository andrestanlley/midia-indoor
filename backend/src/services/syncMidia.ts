import Links from "../enums/links";
import MidiaType from "../enums/midiaTypes";
import IMidia from "../interfaces/IMidia";

export const syncMidiaService = async (localVideos: IMidia[]) => {
	const midias: IMidia[] = [
		{
			filename: "opa2.mp4",
			uri: Links.VIDEO_SERVER + "opa2.mp4",
			type: MidiaType.VIDEO,
		},
		{
			filename: "opa4.mp4",
			uri: Links.VIDEO_SERVER + "opa4.mp4",
			type: MidiaType.VIDEO,
		},
	];

	return {
		DOWNLOAD: midias?.filter(
			(midiaLocal) =>
				!localVideos?.find((midia: IMidia) => midia.filename === midiaLocal.filename)
		),
		DELETE: localVideos?.filter(
			(midiaLocal: any) =>
				!midias?.find((midia: IMidia) => midiaLocal.filename === midia.filename)
		),
	};
};
