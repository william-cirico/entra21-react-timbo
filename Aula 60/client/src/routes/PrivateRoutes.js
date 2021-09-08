import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export function PrivateRoute({ component: Component, ...rest }) {
    const { role } = useAuth();    
  
    return (
      <Route
        {...rest}
        render={() => role
          ? <Component {...rest} />
          : <Redirect to="/login" />
        }
      />
    );
}