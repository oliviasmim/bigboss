import { useHistory } from "react-router";

const LandingPage = () => {
	const history = useHistory();
    return (
		<div style={{display: "grid", placeItems: "center"}}>
            <button onClick={()=> history.push("/login")}>Login ={">"}</button>
            <button onClick={()=> history.push("/signup")}>Cadastro ={">"}</button>
		</div>
	)
}

export default LandingPage;
