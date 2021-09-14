import PageLayout from "../../components/PageLayout";
import DashCards from "../../components/DashCards";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import Typography from "@material-ui/core/Typography";
import { Container, DashboardContainer } from "./styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  //Ajusta o Título da Página
  PageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 295,
  },
});

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
      <PieChart />
    </DashboardContainer>
  );
};

export default Dashboard;
