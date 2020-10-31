import React from "react";
import Navigation from "./Navigation";
import ComponentPage from "./ComponentPage";
import componentData from "../../config/componentData";
import { Switch, Route, withRouter, useLocation } from "react-router-dom";

const Docs = () => {
  const { pathname } = useLocation();
  const component = pathname.slice(1)
    ? componentData.filter(data => data.name === pathname.slice(1))[0]
    : componentData[0];

  return (
    <div>
      <Navigation components={componentData.map(data => data.name)} />
      <Switch>
        <Route
          path={pathname}
          render={() => <ComponentPage component={component} />}
        />
      </Switch>
    </div>
  );
};
export default withRouter(Docs);
