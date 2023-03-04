import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import IMediaProps from "../../interfaces/Media";
import { IoTrashBinSharp } from "react-icons/io5";
import { ListOption } from "./styles";

interface IListOptionsProps {
	media: IMediaProps;
	connectionsCB: (e: React.ChangeEvent<HTMLInputElement>) => void;
	deleteCB: (media: IMediaProps) => void;
}

export default function ListMediasOptions({
	media,
	connectionsCB,
	deleteCB,
}: IListOptionsProps) {
	const { selectedMediaList } = useContext(AppContext);
	const [checked, setChecked] = useState<boolean>(false);

	function mediaListContainThisMedia(mediaId: string) {
		return selectedMediaList?.medias?.find((media) => media.id === mediaId)
			? setChecked(true)
			: setChecked(false);
	}

	useEffect(() => {
		mediaListContainThisMedia(media.id);
	}, [selectedMediaList]);

	return (
		<ListOption>
			<label>
				<input
					type='checkbox'
					id={media.id}
					checked={checked}
					onChange={(e) => {
						connectionsCB(e);
						setChecked(!checked);
					}}
				/>
				{media.name}
			</label>
			<p>
				<IoTrashBinSharp
					color='var(--subtitle)'
					onClick={() => deleteCB(media)}
				/>
			</p>
		</ListOption>
	);
}
