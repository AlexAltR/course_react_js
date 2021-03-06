import React from "react";
import { Route, Switch, Redirect,  } from 'react-router-dom';
import { publicRoutes, privateRoutes } from "../router/routes";



const AppRouter = () => {
   return (

      <Switch>
         {privateRoutes.map(route => 
            <Route
               component={route.component}
               path={route.path}
               exact={route.exact}
            />
         )}
         {publicRoutes.map(route => 
            <Route
               component={route.component}
               path={route.path}
               exact={route.exact}
            />
         )}
         <Redirect to="/posts"/>
      </Switch>

   )
}

export default AppRouter;