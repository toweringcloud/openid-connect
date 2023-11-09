import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Logout = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Button = styled.div`
	font-size: 20px;
	background-color: white;
	color: black;
	border: 1px solid white;
	border-radius: 10%;
	padding: 5px;
	cursor: pointer;
`;

export default function Home() {
	const navigate = useNavigate();
	const logOut = () => {
		auth.signOut();
		navigate(`/login`);
	};
	return (
		<Logout>
			<Button onClick={logOut}>Log Out</Button>
		</Logout>
	);
}
