import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CompletedServices from "../../assets/CompletedServices.svg";
import ConversionRate from "../../assets/ConversionRate.svg";
import Revenue from "../../assets/Revenue.svg";
import PendingServices from "../../assets/PendingServices.svg";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const useStyles = makeStyles((theme) => ({
	//Container Geral
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		flexWrap: "wrap",
	},

	//Ajusta o tamanho do Card
	root: {
		minWidth: 265,
		height: 130,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		margin: 20,
	},

	//Container que engloba a Imagem e o outro container com os demais itens
	containerA: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginTop: 20,
		padding: 0,
	},

	//Ajusta Imagem do Card
	image: {
		width: "24%",
		margin: "1%",
		// width: "16%",
		// margin: "1%",
		// [theme.breakpoints.up(768)]: {
		//   width: "24%",
		//   margin: "2%",
		// },
	},

	//Ajusta o total do card
	amount: {
		fontSize: 18,
		fontWeight: "bold",
	},

	//Ajusta Título do Card
	title: {
		fontSize: 16,
		color: "#B9B9B9",
		marginTop: 7,
	},

	//Container do Total, Título, Taxa e Seta
	containerB: {
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		justifyContent: "center",
		padding: 5,
		marginTop: 2,
	},

	//Ajusta Taxa do Card
	rate: {
		fontSize: 18,
		margin: 0,
		color: "#4BDE97",
		marginTop: 7,
	},

	//Ajusta Taxa do Card
	rateDown: {
		fontSize: 18,
		margin: 0,
		color: "#F55B5D",
		marginTop: 7,
	},

	//Ajusta Seta para cima do Card
	arrow: {
		color: "#4BDE97",
	},

	//Ajusta Seta para baixo do Card
	arrowDown: {
		color: "#F55B5D",
	},
}));

const DashCards = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent className={classes.containerA}>
          <img
            src={CompletedServices}
            alt="ChartImage"
            className={classes.image}
          />
          <CardContent className={classes.containerB}>
            <Typography className={classes.amount}>108</Typography>
            <Typography className={classes.title}>
              Serviços Concluídos
            </Typography>
            <Typography
              className={classes.rate}
              color="textSecondary"
              gutterBottom
            >
              <TrendingUpIcon className={classes.arrow} /> 4,25%
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.containerA}>
          <img
            src={PendingServices}
            alt="ChartImage"
            className={classes.image}
          />
          <CardContent className={classes.containerB}>
            <Typography className={classes.amount}>5</Typography>
            <Typography className={classes.title}>
              Serviços Pendentes
            </Typography>
            <Typography
              className={classes.rate}
              color="textSecondary"
              gutterBottom
            >
              <TrendingUpIcon className={classes.arrow} /> 1,25%
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.containerA}>
          <img
            src={ConversionRate}
            alt="ChartImage"
            className={classes.image}
          />
          <CardContent className={classes.containerB}>
            <Typography className={classes.amount}>78%</Typography>
            <Typography className={classes.title}>Taxa de Conversão</Typography>
            <Typography
              className={classes.rateDown}
              color="textSecondary"
              gutterBottom
            >
              <TrendingDownIcon className={classes.arrowDown} /> -1,64%
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.containerA}>
          <img src={Revenue} alt="ChartImage" className={classes.image} />
          <CardContent className={classes.containerB}>
            <Typography className={classes.amount}>R$20.826,42</Typography>
            <Typography className={classes.title}>Receita de Vendas</Typography>
            <Typography
              className={classes.rate}
              color="textSecondary"
              gutterBottom
            >
              <TrendingUpIcon className={classes.arrow} /> 4,25%
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashCards;
