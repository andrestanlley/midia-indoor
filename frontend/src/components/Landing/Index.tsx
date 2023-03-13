import { Container } from "./styles";
import logoBranca from "../../assets/logo-branca.png";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function Landing() {
	function goToWhatsapp() {}

	return (
		<Container>
			<img src={logoBranca} alt='Logo Eleva Mídia' />
			<div>
				<p>FALE CONOSCO |</p>
				<a href='https://whatsapp.com' target='_blank'>
					<BsWhatsapp size={28} color='var(--branco)' />
				</a>
				<a href='https://instagram.com/elevamidiaindoor' target='_blank'>
					<BsInstagram size={28} color='var(--branco)' />
				</a>
			</div>
		</Container>
	);
}
