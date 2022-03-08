import React from "react";
import  Home  from "../src/pages/Home";
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./pages/Login"
    

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
        </BrowserRouter>
    );
};
export default Routes;