import React from 'react';
import { Switch, Route } from 'react-router-dom';

function renderRoutes(routes, extraProps = {}, switchProps = {}) {
    return routes ? (
        <Switch {...switchProps}>
            {routes.map((route, i) => (
                <Route
                    key={route.key || i}
                    path={route.path}
                    exact={route.exact}
                    strict={route.strict}
                    render={(props) => {
                        const Com = route.component;
                        if (route.routes) {
                            return (
                                <Com {...props}>
                                    {renderRoutes(
                                        route.routes,
                                        extraProps,
                                        switchProps
                                    )}
                                </Com>
                            );
                        }
                        return <Com {...props} />;
                    }}
                />
            ))}
        </Switch>
    ) : null;
}

export default renderRoutes;
