import PageLayout from "../../components/PageLayout";
import DashCards from "../../components/DashCards";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LastProjectsTable from "../../components/LastProjectsTable";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //Container Geral da página
  DashboardContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  Container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  //Ajusta o Título da Página
  PageTitle: {
    display: "flex",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: "32%",
    marginBottom: 30,

    [theme.breakpoints.up(768)]: {
      marginLeft: "55%",
    },

    [theme.breakpoints.up(1024)]: {
      marginLeft: "15%",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.DashboardContainer}>
      <PageLayout />
      <Typography className={classes.PageTitle}>Dashboard </Typography>
      <DashCards />
      <Grid className={classes.Container}>
        <LineChart />
        <BarChart />
      </Grid>
      <Grid className={classes.Container}>
        <LastProjectsTable />
        <PieChart />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
