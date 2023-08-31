import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Page1 from "./pages/page1"; 
import Page2 from "./pages/page2";
import Singup from "./pages/Singup";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Page1 />} />}
			<Route path="/page2" exact element={<Page2 />} />
			<Route path="/singup" exact element={<Singup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}
 
export default App;