import { useHistory } from "react-router";
import Strategies from "../../components/Home/Strategies";
import Dashboard from "../../components/Home/Dashboard";
import DashboardFilter from "../../components/Home/DashboardFilter";

const LandingPage = () => {
	const history = useHistory();
    return (
		<>
		<div style={{display: "grid", placeItems: "center"}}>
            <button onClick={()=> history.push("/login")}>Login ={">"}</button>
            <button onClick={()=> history.push("/signup")}>Cadastro ={">"}</button>
		</div>
		<Strategies />
		<Dashboard />
		<DashboardFilter />
		</>
		
	)
}

export default LandingPage;
