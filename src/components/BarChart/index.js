import React from "react";
import { Bar } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  //Ajusta o Card do Gráfico
  root: {
    width: 380,
    height: 400,
    margin: "10%",
    marginTop: 0,

    [theme.breakpoints.up(768)]: {
      width: 380,
      height: 610,
      margin: 10,
      marginTop: 30,
      marginLeft: "40%",
    },

    [theme.breakpoints.up(1024)]: {
      marginTop: 30,
      marginLeft: 40,
    },
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
    margin: 10,
    maxWidth: 300,
    maxHeight: 320,
    [theme.breakpoints.up(768)]: {
      margin: 20,
      maxWidth: 485,
      maxHeight: 475,
    },
  },
}));

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
