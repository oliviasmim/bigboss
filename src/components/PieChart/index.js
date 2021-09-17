import React from "react";
import { Pie } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useUserServices } from "../../providers/userServices";
import { useUserContracts } from "../../providers/userContracts";

const useStyles = makeStyles((theme) => ({
  //Ajusta o Card do Gráfico
  root: {
    margin: 20,
  },
  //Ajusta Título do gráfico
  title: {
    [theme.breakpoints.up(768)]: {
      fontSize: 24,
    },
  },
  //Ajusta Sub-título do gráfico
  subtitle: {
    fontSize: 14,
  },
  //Ajusta o Gráfico dentro do Card
  chart: {},
}));

const PieChart = () => {
  const classes = useStyles();
  const { userServices } = useUserServices();
  const { userContracts } = useUserContracts();

  const getAllServices = (param) => {
    if (!userServices.length) {
      return [];
    }
    let outputNames = [];
    let outputIds = [];
    for (let i = 0; i < userServices.length; i++) {
      outputNames.push(userServices[i].title);
      outputIds.push(userServices[i].id);
    }
    if (param === "id") {
      return [...new Set([...outputIds])];
    }
    return [...new Set([...outputNames])];
  };
  const getProfitsByServices = () => {
    if (!userServices.length) {
      return [];
    }
    const servicesNames = getAllServices("Names");
    let servicesIds = [];
    for (let i = 0; i < servicesNames.length; i++) {
      servicesIds.push(
        userServices.find((item) => item.title === servicesNames[i]).id
      );
    }

    let values = servicesIds.map((item) =>
      userContracts
        .filter((serv) => serv.service.id === item)
        .reduce((acc, contr) => Number(contr.service.finalValue) + acc, 0)
    );
    let sumValues = values.reduce((acc, item) => item + acc, 0);
    let output = values.map((item) => ((item / sumValues) * 100).toFixed());
    return output;
  };
  return (
    <Card className={classes.root}>
      <CardContent
        style={{
          display: "block",
        }}
      >
        <Typography className={classes.title}>Receitas X Serviços</Typography>
        {/* <Typography
          className={classes.subtitle}
          color="textSecondary"
          gutterBottom
        >
          
        </Typography> */}
        <Pie
          className={classes.chart}
          data={{
            labels: getAllServices("Names"),
            datasets: [
              {
                label: "Vendas por Grupo de Produtos - R$",
                data: getProfitsByServices(),
                backgroundColor: [
                  "rgba(54,168,235,0.4)",
                  "rgba(255,99,132,0.4)",
                  "rgba(93,80,155,0.4)",
                  "rgba(113,10,15,0.4)",
                  "rgba(113,180,105,0.4)",
                  "rgba(113,250,15,0.4)",
                  "rgba(3,100,15,0.4)",
                ],
              },
            ],
          }}
          height={200}
          width={220}
          options={{
            legend: {
              labels: {
                position: "botton",
                boxWidth: 0,
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default PieChart;
