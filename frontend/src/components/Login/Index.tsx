import { useState } from "react";
import { api } from "../../services/api";
import { Container, LoginBox } from "./styles";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	async function handlerLogin() {
		const result = await api.post("/login", {
			name,
			password,
		});
		if (result.status === 200) {
			localStorage.setItem("token", result.data.token);
			navigate("/painel");
		}
	}

	return (
		<Container>
			<img
				src='https://www.reidagrafica.com.br/arquivo/index/501158/sua_logo_aqui_11.png'
				alt='Logo'
			/>
			<LoginBox>
				Usuario
				<input type='text' onChange={(e) => setName(e.target.value)} />
				Senha
				<input type='password' onChange={(e) => setPassword(e.target.value)} />
				<button onClick={handlerLogin}>Entrar</button>
			</LoginBox>
		</Container>
	);
}
