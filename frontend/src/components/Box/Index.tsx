import { ReactNode } from "react";
import { Container, Title } from "./styles";

interface BoxProps {
	title?: string;
	children: ReactNode;
	id?: string;
}

export default function Box({ title = "", children, id }: BoxProps) {
	return (
		<Container id={id}>
			<Title>{title}</Title>
			{children}
		</Container>
	);
}
