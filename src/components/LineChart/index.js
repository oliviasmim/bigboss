import React from "react";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  //Ajusta o Card do Gráfico
  root: {
    width: 380,
    margin: "10%",
    marginTop: 0,
    height: 400,
    [theme.breakpoints.up("sm")]: {
      height: 610,
      width: 1240,
      margin: 10,
      marginLeft: "14%",
    },
  },
  //Ajusta o Título do gráfico
  title: {
    fontSize: 18,
    [theme.breakpoints.up("sm")]: {
      fontSize: 24,
    },
  },
  //Ajusta Sub-título do gráfico
  subtitle: {
    fontSize: 14,
  },
  //Ajusta o Gráfico dentro do Card
  chart: {
    margin: "2%",
    width: "10%",
    height: "10%",

    [theme.breakpoints.up("sm")]: {
      margin: 10,
      width: 1175,
      height: 510,
    },
  },
}));

const LineChart = () => {
  const classes = useStyles();
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
                data: [
                  3500, 4000, 4000, 2500, 1200, 3000, 5200, 3500, 5600, 3200,
                  2000, 4850,
                ],
                backgroundColor: "rgba(255,99,132,0.4)",
                fill: "start",
              },

              {
                label: "Clientes Novos Mensal - Qtd.",
                data: [20, 30, 40, 25, 22, 30, 42, 55, 56, 32, 21, 45],
                backgroundColor: "rgba(54,168,235,0.4)",
                fill: "start",
              },
            ],
          }}
          height={400}
          width={200}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            title: { text: "Vendas por Grupo de Produtos - R$", display: true },
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
