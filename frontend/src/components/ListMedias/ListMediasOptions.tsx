import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import IMediaProps from "../../interfaces/Media";
import { IoTrashBinSharp } from "react-icons/io5";
import { ListOption } from "./styles";
import isExpiredTerminal from "../../services/isExpiredTerminal";
import { api } from "../../services/api";
import { sucess } from "../Alert/Index";

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
	const { selectedMediaList, setMedias, medias } = useContext(AppContext);
	const [checked, setChecked] = useState<boolean>(false);

	const vencendo = {
		background: "var(--amarelo)",
		color: "var(--branco)",
	};

	const vencido = {
		background: "var(--vermelho)",
		color: "var(--branco)",
	};

	function mediaListContainThisMedia(mediaId: string) {
		return selectedMediaList?.medias?.find((media) => media.id === mediaId)
			? setChecked(true)
			: setChecked(false);
	}

	function getExpiresDateColor() {
		const expiresDate = new Date(media.expiresIn).toISOString().split("T")[0];
		const daysRemaining = isExpiredTerminal(new Date(media.expiresIn));
		if (daysRemaining <= 0) {
			return { expiresDate, style: vencido };
		}
		if (daysRemaining <= 7) {
			return { expiresDate, style: vencendo };
		}
		return { expiresDate, style: {} };
	}

	async function editMediaDate(newDate: string) {
		const data = {
			id: media.id,
			expiresIn: newDate,
		};
		const result = await api.put("/media/update", data);
		if (result.status === 200) {
			sucess("Mídia renovada");
			setMedias!(medias.map((md) => (md.id === media.id ? result.data : md)));
		}
	}

	useEffect(() => {
		mediaListContainThisMedia(media.id);
	}, [selectedMediaList]);

	return (
		<ListOption style={getExpiresDateColor().style}>
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

			<div>
				<input
					type='date'
					id='datepicker'
					value={getExpiresDateColor().expiresDate}
					onChange={(e) => editMediaDate(e.target.value)}
				/>
				<p>
					<IoTrashBinSharp
						color='var(--subtitle)'
						onClick={() => deleteCB(media)}
					/>
				</p>
			</div>
		</ListOption>
	);
}
