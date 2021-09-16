import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import PageCustomer from "../pages/PageCustomer";
import Profile from "../pages/Profile";
import RegisterCustomer from "../pages/RegisterCustomer";
import SearchCustomer from "../pages/SearchCustomer";
import SearchServices from "../pages/SearchServices";
import Services from "../pages/Services";
import Signup from "../pages/Signup";
import Page404 from "../pages/Page404";
import Reports from "../pages/Reports";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/services/search" component={SearchServices} />
            <Route exact path="/customer" component={SearchCustomer} />
            <Route exact path="/customer/register" component={RegisterCustomer} />
            <Route exact path="/customer/id/:clientId" component={PageCustomer} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/reports" component={Reports} />
            <Route path="*" component={Page404} />
        </Switch>
    )
}

export default Routes;