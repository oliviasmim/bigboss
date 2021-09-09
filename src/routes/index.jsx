import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import PageCostumer from "../pages/PageCostumer";
import RegisterCostumer from "../pages/RegisterCustomer";
import SearchCostumer from "../pages/SearchCustomer";
import SearchServices from "../pages/SearchServices";
import Services from "../pages/Services";
import Signup from "../pages/Signup";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/services/search" component={SearchServices} />
            <Route exact path="/costumer" component={SearchCostumer} />
            <Route exact path="/costumer/register" component={RegisterCostumer} />
            <Route exact path="/costumer/page:id" component={PageCostumer} />
        </Switch>
    )
}

export default Routes;