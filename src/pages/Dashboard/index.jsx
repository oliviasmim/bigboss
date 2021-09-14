import PageLayout from "../../components/PageLayout";
import DashCards from "../../components/DashCards";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LastProjectsTable from "../../components/LastProjectsTable";
import Typography from "@material-ui/core/Typography";
import { Container, DashboardContainer } from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //Container Geral da página
  DashboardContainer: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },

  //Ajusta o Título da Página
  PageTitle: {
    display: "flex",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: "30%",

    [theme.breakpoints.up("sm")]: {
      marginLeft: "14%",
    },
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <DashboardContainer>
      <PageLayout />
      <Typography className={classes.PageTitle}>Dashboard </Typography>
      <DashCards />
      <Container>
        <LineChart />
        <BarChart />
      </Container>
      <Container>
        <LastProjectsTable />
        <PieChart />
      </Container>
    </DashboardContainer>
  );
};

export default Dashboard;
