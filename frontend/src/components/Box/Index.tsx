import { PropsWithChildren } from "react";
import { Container } from "./styles";

export default function Box({ children }: PropsWithChildren) {
	return <Container>{children}</Container>;
}
