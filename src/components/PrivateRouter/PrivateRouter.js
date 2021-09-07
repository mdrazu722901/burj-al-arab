import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRouter = ({ children, ...rest }) => {
    const [data, setData] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                data?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRouter;