import {
	PageContainer,
	Card,
	H4,
	Paragraph,
	ContainerFlex,
	TitleHeader,
} from "./styles";
import Image1 from "../../../assets/strategies1.svg";
import Image2 from "../../../assets/strategies2.svg";
import Image3 from "../../../assets/strategies3.svg";

const Strategies = () => {
	return (
		<PageContainer>
			<TitleHeader>
				<h3>Melhores estratégias de négocio</h3>
				<p>
					Cadastre clientes atuais e futuros. Organize seus produtos e
					projetos. Relatórios completos e atualizados para um melhor
					controle.{" "}
				</p>
			</TitleHeader>
			<ContainerFlex>
				<Card>
					<img src={Image1} alt="pie chart" />
					<H4>Cadastre potenciais clientes</H4>
					<Paragraph>
						Com apenas alguns cliques, tenha uma visão geral dos
						cadastros
					</Paragraph>
				</Card>
				<Card>
					<img src={Image2} alt="browser stats" />
					<H4>Gráficos intuitivos</H4>
					<Paragraph>Gerencie melhor os ganhos e serviços</Paragraph>
				</Card>
				<Card>
					<img src={Image3} alt="investment data" />
					<H4>Baixe seus relatórios</H4>
					<Paragraph>
						Tenha fácil acesso a planilhas do excel com o relatório
						do seu negócio.
					</Paragraph>
				</Card>
			</ContainerFlex>
		</PageContainer>
	);
};

export default Strategies;
