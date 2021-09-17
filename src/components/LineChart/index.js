import React from "react";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useUserClients } from "../../providers/userClients";
import { useUserContracts } from "../../providers/userContracts";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  //Ajusta o Card do Gráfico
//   root: {
//     width: 260,
//     height: 410,
//     fontSize: 18,
//     margin: 20,
//     [theme.breakpoints.up(1550)]: {
//       width: 878,
//       fontSize: 24,
//     },
//   },
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
    marginTop: 60,
    width: 200,
    height: 150,
  },
}));

const LineChart = () => {
  const classes = useStyles();
  const { userClients } = useUserClients();
  const { userContracts } = useUserContracts();

  const getProfitPerMonth = () => {
    if (!userContracts.length) {
      return [];
    }
    const totalMonths = 12;
    let output = [];
    for (let i = 1; i <= totalMonths; i++) {
      let finished = userContracts
        .filter((item) => new Date(item.finishDate).getMonth() === i)
        .reduce((acc, item) => Number(item.service.finalValue) + acc, 0);
      output.push(finished);
    }
    return output;
  };
  const getNewClientsPerMonth = () => {
    if (!userClients.length) {
      return [];
    }
    const totalMonths = 12;
    let output = [];
    for (let i = 1; i <= totalMonths; i++) {
      let count = userClients.filter(
        (item) => new Date(item.clientSince).getMonth() === i
      ).length;
      output.push(count);
    }
    return output;
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  return (
		<Card className={classes.root}>
			<CardContent>
				<Typography className={classes.title}>
					Receitas e Clientes Novos
				</Typography>
				<Typography
					className={classes.subtitle}
					color="textSecondary"
					gutterBottom
				>
					JAN-DEZ
				</Typography>
				<Line
					className={classes.chart}
					data={{
						labels: [
							"JAN",
							"FEV",
							"MAR",
							"ABR",
							"MAI",
							"JUN",
							"JUL",
							"AGO",
							"SET",
							"OUT",
							"NOV",
							"DEZ",
						],
						datasets: [
							{
								label: "Faturamento Mensal - R$",
								data: getProfitPerMonth(),
								backgroundColor: "rgba(255,99,132,0.4)",
								fill: "start",
							},

              {
                label: "Clientes Novos Mensal - Qtd.",
                data: getNewClientsPerMonth(),
                backgroundColor: "rgba(54,168,235,0.4)",
                fill: "start",
              },
            ],
          }}
          height={windowWidth > 1500 ? 250 : 150}
          width={windowWidth > 1500 ? 800 : 200}
          options={{
            maintainAspectRatio: true,
            responsive: false,
            title: {
              text: "Vendas por Grupo de Produtos - R$",
              display: true,
            },
            scales: {
              y: {
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

export default LineChart;
