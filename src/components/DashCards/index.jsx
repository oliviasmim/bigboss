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
import { useUserContracts } from "../../providers/userContracts";
import { useUserClients } from "../../providers/userClients";

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
    height: 135,
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
    padding: 5,
  },

  //Ajusta Imagem do Card
  image: {
    width: "16%",
    margin: "1%",
    [theme.breakpoints.up(768)]: {
      width: "24%",
      margin: "2%",
    },
  },

  //Ajusta o total do card
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },

  //Ajusta Título do Card
  title: {
    fontSize: 18,
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
  const { userContracts } = useUserContracts();
  const { userClients } = useUserClients();
  console.log(userContracts);
  //contratos finalizados
  const finishedContracts = userContracts.length
    ? userContracts.filter((item) => item.status === "Concluído").length
    : 0;
  const finishedContractLastMonth = userContracts.length
    ? userContracts
        .filter(
          (item) =>
            new Date(item.finishDate).getMonth() === new Date().getMonth() - 1
        )
        .filter((item) => item.status === "Concluído").length
    : 0;
  const percentualContracts = (
    ((finishedContracts - finishedContractLastMonth) /
      (finishedContracts || 1)) *
    100
  ).toFixed(2);
  //contratos pendentes
  const pendentsContracts = userContracts.length
    ? userContracts.filter((item) => item.status === "Em andamento").length
    : 0;
  //entrada mensal
  const monthIncoming = userContracts.length
    ? userContracts
        .filter(
          (item) =>
            new Date(item.finishDate).getMonth() === new Date().getMonth()
        )
        .filter((item) => item.status === "Concluído")
        .reduce((acc, item) => Number(item.service.finalValue) + acc, 0)
    : 0;
  const lastMonthIncomingDiff = userContracts.length
    ? (
        ((monthIncoming -
          userContracts
            .filter(
              (item) =>
                new Date(item.finishDate).getMonth() ===
                new Date().getMonth() - 1
            )
            .filter((item) => item.status === "Concluído")
            .reduce((acc, item) => Number(item.service.finalValue) + acc, 0)) /
          (monthIncoming || 1)) *
        100
      ).toFixed(2)
    : "0.00";
  //serviços pendentes
  const pendentContractsLastMonth = userContracts.length
    ? userContracts
        .filter(
          (item) =>
            new Date(item.finishDate).getMonth() !== new Date().getMonth()
        )
        .filter((item) => item.status === "Em andamento").length
    : 0;
  const pendentsDiff = (
    ((pendentsContracts - pendentContractsLastMonth) /
      (pendentsContracts || 1)) *
    100
  ).toFixed(2);
  //taxa conversão (não é bem isso)
  const totalConvertions = userContracts.length
    ? userContracts.filter(
        (item) => new Date(item.startDate).getMonth() === new Date().getMonth()
      ).length
    : 0;
  const clientsThisMonth = userClients.length
    ? userClients.filter(
        (item) =>
          new Date(item.clientSince).getMonth() === new Date().getMonth()
      ).length
    : 0;
  const convertionsDiff = ((totalConvertions / clientsThisMonth) * 100).toFixed(
    2
  );
  const totalConvertionsPast = userContracts.length
    ? userContracts.filter(
        (item) =>
          new Date(item.startDate).getMonth() === new Date().getMonth() - 1
      ).length
    : 0;
  const clientsPastMonth = userClients.length
    ? userClients.filter(
        (item) =>
          new Date(item.clientSince).getMonth() === new Date().getMonth() - 1
      ).length
    : 0;
  const convertionCompare = (
    ((totalConvertions / (clientsThisMonth || 1) -
      totalConvertionsPast / (clientsPastMonth || 1)) /
      (totalConvertions / (clientsThisMonth || 1) || 1)) *
    100
  ).toFixed(2);
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
            <Typography className={classes.amount}>
              {finishedContracts}
            </Typography>
            <Typography className={classes.title}>
              Serviços Concluídos
            </Typography>
            <Typography
              className={classes.rate}
              color="textSecondary"
              gutterBottom
            >
              <TrendingUpIcon className={classes.arrow} />{" "}
              {`${percentualContracts}%`}
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
            <Typography className={classes.amount}>
              {pendentsContracts}
            </Typography>
            <Typography className={classes.title}>
              Serviços Pendentes
            </Typography>
            <Typography
              className={pendentsDiff ? classes.rate : classes.rateDown}
              color="textSecondary"
              gutterBottom
            >
              {pendentsDiff === "0.00" ? null : pendentsDiff > 0 ? (
                <TrendingUpIcon className={classes.arrow} />
              ) : (
                <TrendingDownIcon className={classes.arrowDown} />
              )}{" "}
              {`${pendentsDiff}%`}
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
            <Typography className={classes.amount}>{`${
              convertionsDiff > 0 ? convertionsDiff : 0
            }%`}</Typography>
            <Typography className={classes.title}>Taxa de Conversão</Typography>
            <Typography
              className={
                convertionCompare > 0 ? classes.rate : classes.rateDown
              }
              color="textSecondary"
              gutterBottom
            >
              {convertionCompare === "0.00" ? null : convertionCompare > 0 ? (
                <TrendingUpIcon className={classes.arrow} />
              ) : (
                <TrendingDownIcon className={classes.arrowDown} />
              )}{" "}
              {`${convertionCompare}%`}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
      <Card className={classes.root}>
        <CardContent className={classes.containerA}>
          <img src={Revenue} alt="ChartImage" className={classes.image} />
          <CardContent className={classes.containerB}>
            <Typography className={classes.amount}>
              {`R$ ${monthIncoming.toFixed(2)}`}
            </Typography>
            <Typography className={classes.title}>Receita do mês</Typography>
            <Typography
              className={
                lastMonthIncomingDiff > 0 ? classes.rate : classes.rateDown
              }
              color="textSecondary"
              gutterBottom
            >
              {lastMonthIncomingDiff === "0.00" ? null : lastMonthIncomingDiff >
                0 ? (
                <TrendingUpIcon className={classes.arrow} />
              ) : (
                <TrendingDownIcon className={classes.arrowDown} />
              )}{" "}
              {`${lastMonthIncomingDiff}%`}
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashCards;
