import { useState } from "react";
import logo from "../../../assets/logo.png";
import "../../../styles/style.css";
import { useHistory, Link } from "react-router-dom";

const Navbar = () => {
	const history = useHistory();

	const [nav, setNav] = useState(false);

	const changeBackground = () => {
		if (window.scrollY >= 50) {
			setNav(true);
		} else {
			setNav(false);
		}
	};

	window.addEventListener("scroll", changeBackground);

	return (
		<nav className={"navbar" ? "navbar active" : "navbar"}>
			<Link to="/" className="logo">
				<img src={logo} alt="logo" />
			</Link>
			<input type="checkbox" className="menu-btn" id="menu-btn" />
			<label className="menu-icon" htmlFor="menu-btn">
				<span className="nav-icon"></span>
			</label>
			<div className="menu">
				<ul className="menu-list">
					<li>
						<a href="#about">Sobre</a>
					</li>
					<li>
						<a href="#team">Equipe</a>
					</li>
					<li>
						<a href="#contact">Contato</a>
					</li>
				</ul>
				<div className="login">
					<button
						className="cv-btn"
						onClick={() => history.push("/login")}
					>
						Login
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
