import { 
    BrowserRouter as Router, 
    Route,
    Switch 
} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import { PrivateRoute } from "./PrivateRoutes";

export function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />                    
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route component={NotFound} />                                    
            </Switch>
        </Router>
    )
}