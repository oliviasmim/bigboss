import React from "react";
import { Pie } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  //Ajusta o Card do Gráfico
  root: {
    width: 380,
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
    margin: 20,
    maxWidth: 300,
    maxHeight: 320,
  },
}));

const PieChart = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>Receitas X Serviços</Typography>
        <Typography
          className={classes.subtitle}
          color="textSecondary"
          gutterBottom
        >
          JAN-DEZ
        </Typography>
        <Pie
          className={classes.chart}
          data={{
            labels: ["APP", "Web-page", "Games"],
            datasets: [
              {
                label: "Vendas por Grupo de Produtos - R$",
                data: [8000, 5000, 4000],
                backgroundColor: [
                  "rgba(54,168,235,0.4)",
                  "rgba(255,99,132,0.4)",
                  "rgba(93,80,155,0.4)",
                ],
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            legend: {
              position: "bottom",
              labels: {
                padding: 25,
                boxWidth: 20,
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PieChart;
