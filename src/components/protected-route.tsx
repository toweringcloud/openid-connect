import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

export default function ProtectedRoute({
	children,
}: {
	children: React.ReactNode;
}) {
	const user = auth.currentUser;
	const loginPage = `/login`;
	if (user === null) {
		return <Navigate to={loginPage} />;
	}
	return children;
}
