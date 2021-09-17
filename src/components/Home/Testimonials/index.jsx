import {
	PageContainer,
	TitleHeader,
	Card,
	CardContent,
	Avatar,
	CardsContainer,
} from "./styles";
import Avatar1 from "../../../assets/avatarcustomer1.svg";
import Avatar2 from "../../../assets/avatarcustomer2.svg";
import Stars4 from "../../../assets/4starts.svg";
import Stars5 from "../../../assets/5stars.svg";

const Testimonials = () => {
	return (
		<PageContainer>
			<TitleHeader>
				<h3>Opiniões dos clientes</h3>
				<p>Confira o que nossos usuários estão falando sobre nós!</p>
			</TitleHeader>
			<CardsContainer>
				<Card>
					<CardContent>
						<h3>John Doe</h3>
						<p>
							{" "}
							Most calendars are designed for teams. Slate is
							designed for freelancers who want a simple way{" "}
						</p>
						<img src={Stars4} alt="4 starts" />
					</CardContent>
					<Avatar src={Avatar1} alt="John Doe" />
				</Card>
				<Card>
					<CardContent>
						<h3>Jane Doe</h3>
						<p>
							{" "}
							Most calendars are designed for teams. Slate is
							designed for freelancers who want a simple way{" "}
						</p>
						<img src={Stars5} alt="5 starts" />
					</CardContent>
					<Avatar src={Avatar2} alt="Jane Doe" />
				</Card>
			</CardsContainer>
		</PageContainer>
	);
};

export default Testimonials;
