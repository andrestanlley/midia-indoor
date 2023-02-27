import { BlackBackground } from "./styles";

export default function Modal({ children }: React.PropsWithChildren) {
	return (
		<BlackBackground>
			<div>{children}</div>
		</BlackBackground>
	);
}
