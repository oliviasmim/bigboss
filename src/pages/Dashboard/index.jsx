import PageLayout from "../../components/PageLayout";
import DashCards from "../../components/DashCards";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LastProjectsTable from "../../components/LastProjectsTable";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

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
    alignContent: "center",
    justifyContent: "center",
  },
  //Ajusta o Título da Página
  PageTitle: {
    display: "flex",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  window.addEventListener("resize", () => {
		setWindowWidth(window.innerWidth);
  });
  const formationA = () => {
      return (
          <>
          <div>
          <LineChart />
          <PieChart />
          </div>
          <BarChart />
          </>
      )
  }
  const formationB = () => {
      return (
          <>
          <LineChart />
            <div style={{display: "flex"}}>
          <PieChart />
          <BarChart />
          </div>
          </>
      )
  }
  return (
    <PageLayout>
      <Grid className={classes.DashboardContainer}>
        <Typography className={classes.PageTitle}>Dashboard </Typography>

        <Grid className={classes.Container}>
          <DashCards />
          {windowWidth < 1550 ? formationA() : formationB()}
          
        </Grid>
          <LastProjectsTable />
        <Grid className={classes.Container}></Grid>
      </Grid>
    </PageLayout>
  );
};

export default Dashboard;
