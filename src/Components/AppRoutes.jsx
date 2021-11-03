import React, { useContext } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import { privateRoutes, publicRoutes } from './../routes/index';
import { AuthContext } from './../context/index';
import Loader from './UI/loader/Loader';

const AppRoutes = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ?
            <Switch>
                { privateRoutes.map((route, index) => 
                    <Route 
                        path={ route.path } 
                        exact={ route.exact } 
                        component={ route.component }
                        key={ index } 
                    />
                )}
                <Redirect to="/posts" />
            </Switch>
            :
            <Switch>
                { publicRoutes.map((route, index) => 
                    <Route 
                        path={ route.path } 
                        exact={ route.exact } 
                        component={ route.component }
                        key={ index } 
                    />
                )}
                <Redirect to="/login" />
            </Switch>
    )
}

export default AppRoutes
