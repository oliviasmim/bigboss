import Strategies from "../../components/Home/Strategies";
import Dashboard from "../../components/Home/Dashboard";
import DashboardFilter from "../../components/Home/DashboardFilter";
import Header from "../../components/Home/Header"
import Testimonials from "../../components/Home/Testimonials";
const LandingPage = () => {
    return (
		<>
		<Header />
		<Strategies />
		<Dashboard />
		<DashboardFilter />
		<Testimonials />
		</>
		
	)
}

export default LandingPage;
