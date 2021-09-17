import React from "react";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useUserContracts } from "../../providers/userContracts";

const useStyles = makeStyles((theme) => ({
	//Ajusta o Card do Gráfico
	root: {
		width: 255,
		height: 410,

		margin: 20,
	},
	//Ajusta Título do gráfico
	title: {
		fontSize: 18,
		[theme.breakpoints.up(768)]: {
			fontSize: 24,
		},
	},
	//Ajusta Sub-título do gráfico
	subtitle: {
		fontSize: 14,
	},
	//Ajusta o Gráfico dentro do Card
	chart: {
		width: 100,
		height: 200,
	},
}));

const BarChart = () => {
	const classes = useStyles();
	const { userContracts } = useUserContracts();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	window.addEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
	});
	const getTopFive = (params) => {
		if (!userContracts) {
			return [];
		}
		const topInfos = {};
		userContracts.forEach((item) => {
			let name = item.client.name;
			if (topInfos[name] === undefined) {
				return (topInfos[name] = Number(item.service.finalValue));
			}
			topInfos[name] += Number(item.service.finalValue);
		});
		let namesArray = Object.keys(topInfos);
		if (params === "names") {
			if (namesArray.length < 5) {
				let size = namesArray.length;
				for (let i = size; i < 5; i++) {
					namesArray.push("");
				}
			}
			return namesArray.slice(0, 5);
		}
		let topValues = Object.values(topInfos);
		if (params === "values") {
			if (topValues.length < 5) {
				let size = topValues.length;
				for (let i = size; i < 5; i++) {
					topValues.push("");
				}
			}
			return topValues.slice(0, 5);
		}
	};

	return (
		<Card
			className={classes.root}
			style={windowWidth > 1500 ? { height: "410px" } : {}}
		>
			<CardContent>
				<Typography className={classes.title}>
					Top 5 Clientes
				</Typography>
				<Typography
					className={classes.subtitle}
					color="textSecondary"
					gutterBottom
				>
					JAN-DEZ
				</Typography>
				<Bar
					className={classes.chart}
					style={windowWidth > 1500 ? { height: "300px" } : {}}
					data={{
						labels: getTopFive("names"),
						datasets: [
							{
								label: "Top 5 Clientes - Total de Compras R$",
								data: getTopFive("values"),
								backgroundColor: "rgba(54,168,235,0.4)",
								borderColor: "rgba(54,168,235,1)",
								borderWidth: 1,
							},
						],
					}}
					height={350}
					width={200}
					options={{
						maintainAspectRatio: true,
						responsive: false,
						scales: {
							x: {
								grid: {
									display: false,
								},
							},
						},
					}}
				/>
			</CardContent>
		</Card>
	);
};

export default BarChart;
