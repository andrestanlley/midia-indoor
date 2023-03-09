import { randomUUID } from "node:crypto";

interface IUserProps {
	id?: string;
	name: string;
	password: string;
}


class User {
	private props: IUserProps;

	constructor(props: IUserProps) {
		this.props = props;
		this.props.id = props.id ?? randomUUID();
	}

	get id() {
		return this.props.id;
	}

	get name() {
		return this.props.name;
	}

	get password() {
		return this.props.password;
	}
}

export { User, IUserProps };
