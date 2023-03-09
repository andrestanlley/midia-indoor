import { BlackBackground, ModalHeader, ModalContent } from "./styles";
import { useState, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AppContext } from "../../Context/AppContext";
import { api } from "../../services/api";
import { sucess } from "../Alert/Index";

export default function Modal() {
	const { selectedTerminal, mediasList, setTerminais } = useContext(AppContext);
	const [terminalName, setTerminalName] = useState<string>("");
	const [selectedMediaList, setSelectedMedialist] = useState<string>("");
	const [modalStatus, setModalStatus] = useState<boolean>(false);

	async function addMediaListToTerminal() {
		if (selectedMediaList && selectedTerminal) {
			const data = {
				terminalId: selectedTerminal.deviceId,
				mediaListId: selectedMediaList,
			};
			const result = await api.post("/terminal/add-midialist", data);
			if (result.status === 200) {
				sucess("Lista sincronizada com terminal");
				setTerminais!((oldData) =>
					[...oldData].map((terminal) =>
						terminal.deviceId === selectedTerminal.deviceId
							? { ...selectedTerminal, mediaListId: selectedMediaList }
							: terminal
					)
				);
			}
		}
		if (terminalName) {
			await renameTerminal(terminalName, selectedTerminal?.deviceId!);
		}
		setModalStatus(false);
	}

	async function renameTerminal(name: string, deviceId: string) {
		const data = {
			deviceId,
			name,
		};
		const result = await api.put("/terminal", data);
		if (result.status === 200) {
			sucess("Terminal renomeado");
			setTerminais!((oldData) =>
				[...oldData].map((terminal) =>
					terminal.deviceId === result.data.deviceId
						? { ...terminal, name: data.name }
						: terminal
				)
			);
		}
	}

	function isApplyButtonDisable() {
		return (selectedMediaList && selectedTerminal) || terminalName
			? false
			: true;
	}

	useEffect(() => {
		if (selectedTerminal) {
			setModalStatus(true);
			setSelectedMedialist("");
			setTerminalName("");
		}
	}, [selectedTerminal]);

	return (
		<>
			{modalStatus && (
				<BlackBackground>
					<ModalContent>
						<ModalHeader>
							<input
								type='text'
								placeholder={selectedTerminal?.name}
								onChange={(e) => setTerminalName(e.target.value)}
							/>
							<button onClick={() => setModalStatus(false)}>
								<AiOutlineClose size={24} />
							</button>
						</ModalHeader>

						<section>
							{mediasList.map((ml) => (
								<label key={ml.id}>
									<input
										type='radio'
										id={ml.id}
										name='medialist'
										defaultChecked={selectedTerminal?.mediaListId === ml.id}
										onChange={(e) => setSelectedMedialist(e.target.id)}
									/>
									{ml.name}
								</label>
							))}
						</section>
						<button
							id='applyButton'
							onClick={addMediaListToTerminal}
							disabled={isApplyButtonDisable()}
						>
							Aplicar
						</button>
					</ModalContent>
				</BlackBackground>
			)}
		</>
	);
}
