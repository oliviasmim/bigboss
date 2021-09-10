import PageLayout from "../../components/PageLayout";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";

const Dashboard = () => {
  return (
    <PageLayout>
      <BarChart />
      <PieChart />
			<LineChart />
		</PageLayout>
  )
}

export default Dashboard;