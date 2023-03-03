import { ReactNode } from "react";
import { Container, Title } from "./styles";

interface BoxProps {
	title?: string;
	children: ReactNode;
}

export default function Box({ title = "", children }: BoxProps) {
	return (
		<Container>
			<Title>{title}</Title>
			{children}
		</Container>
	);
}
