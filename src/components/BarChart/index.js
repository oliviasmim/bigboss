import React from "react";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  //Ajusta o Card do Gráfico
  root: {
    maxWidth: 575,
    maxHeight: 375,
    margin: 10,
  },
  //Ajusta Título do gráfico
  title: {
    fontSize: 24,
  },
  //Ajusta Sub-título do gráfico
  subtitle: {
    fontSize: 14,
  },
  //Ajusta o Gráfico dentro do Card
  chart: {
    margin: 20,
    maxWidth: 485,
    maxHeight: 225,
  },
});

const BarChart = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>Top 5 Clientes</Typography>
        <Typography
          className={classes.subtitle}
          color="textSecondary"
          gutterBottom
        >
          JAN-DEZ
        </Typography>
        <Bar
          className={classes.chart}
          data={{
            labels: [
              "Cliente1",
              "Cliente2",
              "Cliente3",
              "Cliente4",
              "Cliente5",
            ],
            datasets: [
              {
                label: "Top 5 Clientes - Total de Compras R$",
                data: [2000, 1500, 1200, 1050, 1000],
                backgroundColor: "rgba(54,168,235,0.4)",
                borderColor: "rgba(54,168,235,1)",
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={200}
          options={{
            maintainAspectRatio: false,
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