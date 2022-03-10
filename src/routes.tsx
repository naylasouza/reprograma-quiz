import React from "react";
import  Home  from "../src/pages/Home";
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Login from "./pages/Login"
import Quiz from "./pages/Quiz"
    

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/quiz" component={Quiz} />
        </Switch>
        </BrowserRouter>
    );
};
export default Routes;