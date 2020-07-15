import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AllBadges from "./pages/AllBadges.jsx";
import NewBadge from "./pages/NewBadge.jsx";

import "./global.css";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    path="/badge/all"
                    exact
                    component={AllBadges}
                />
                <Route
                    path="/badge/create"
                    exact
                    component={NewBadge}
                />
            </Switch>
        </BrowserRouter>
    );
}

export default App;