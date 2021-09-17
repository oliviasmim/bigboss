import Navbar from "../Navbar";
import { useHistory } from "react-router-dom";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";

const Header = () => {
	const history = useHistory();

	const container = useRef(null);

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: require("../../../Growth.json"),
		});
	}, []);

	return (
		<div id="main">
			<Navbar />
			<div className="name">
				<h1>Controle.</h1>
				<h1>Organize.</h1>
				<h1>Cresça.</h1>
				<p className="details">
					Sua gestão e organização é fundamental para o crescimento
					dos seus negócios. O BigBoss veste a camisa do seu negócio.
					Descubra...
				</p>
				<div className="header-btns">
					<button
						className="cv-btn"
						onClick={() => history.push("/signup")}
					>
						Cadastre-se
					</button>
					<button
						className="cv-btn-white "
						onClick={() => history.push("#sobre")}
					>
						Saiba mais
					</button>
				</div>
			</div>
			<div className="hero-right container" ref={container}></div>
		</div>
	);
};

export default Header;
