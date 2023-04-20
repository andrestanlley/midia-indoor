import { Container } from "./styles";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export default function Landing() {
	function goToWhatsapp() {}

	return (
		<Container>
			<img src='./logo-branca.png' alt='Logo Eleva Mídia' />
			<div>
				<p>FALE CONOSCO |</p>
				<a href='https://api.whatsapp.com/send/?phone=5584996707905' target='_blank'>
					<BsWhatsapp size={28} color='var(--branco)' />
				</a>
				<a href='https://instagram.com/elevamidiaindoor' target='_blank'>
					<BsInstagram size={28} color='var(--branco)' />
				</a>
			</div>
		</Container>
	);
}
