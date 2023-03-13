import { useState } from "react";
import { api } from "../../services/api";
import { Container, LoginBox } from "./styles";
import { useNavigate } from "react-router-dom";
import { error, sucess } from "../Alert/Index";
import pcIcon from "../../assets/programacao.png";
import logoBranca from "../../assets/logo-branca.png";

export default function Login() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	async function handlerLogin() {
		try {
			const result = await api.post("/login", {
				name,
				password,
			});
			if (result.status === 200) {
				api.defaults.headers.common.Authorization =
					"Bearer " + result.data.token;
				localStorage.setItem("token", result.data.token);
				navigate(0);
				return sucess(`Bem vindo ${name}!`);
			}
		} catch (err) {
			return error("Credenciais incorretas.");
		}
	}

	return (
		<Container>
			<LoginBox>
				<div>
					<img src={pcIcon} alt='Logo' />
				</div>
				<input
					type='text'
					onChange={(e) => setName(e.target.value)}
					placeholder='Usuario'
				/>
				<input
					type='password'
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Senha'
				/>
				<button onClick={handlerLogin}>Entrar</button>
			</LoginBox>
			<img src={logoBranca} alt='Logo Eleva Mídia' />
		</Container>
	);
}
