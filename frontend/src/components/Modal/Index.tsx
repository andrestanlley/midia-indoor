import { BlackBackground, ModalContent } from "./styles";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Context/AppContext";

export default function Modal() {
	const { selectedTerminal, mediasList } = useContext(AppContext);
	const [modalStatus, setModalStatus] = useState<boolean>(false);

	useEffect(() => {
		if (selectedTerminal) {
			setModalStatus(true);
		}
	}, [selectedTerminal]);

	return (
		<>
			{modalStatus && (
				<BlackBackground>
					<ModalContent>
						<p onClick={() => setModalStatus(false)}>fechar</p>
						{selectedTerminal?.name}

						{mediasList.map((ml) => (
							<label>
								<input type='radio' id={ml.id} name="medialist" defaultChecked={false} />
								{ml.name}
							</label>
						))}
					</ModalContent>
				</BlackBackground>
			)}
		</>
	);
}
