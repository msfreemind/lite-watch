import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

// Define Auth Routes: pages related to authentication, such as login/signup
const Auth = ({ loggedIn, path, exact, component: Component }) => {
  return (
    <Route 
      path={path}
      exact={exact}
      render={props => (
        loggedIn ? <Redirect to="/feed"/> : <Component {...props}/>
      )} 
    />
  );
};

// Defined Protected Routes: pages that should only be accessed by authenticated users
const Protected = ({ loggedIn, path, exact, component: Component }) => {
  return (
    <Route 
      path={path}
      exact={exact}
      render={props => (
        loggedIn ? <Component {...props}/> : <Redirect to="/login"/>
      )} 
    />
  );
};

export const AuthRoute = withRouter( connect(mapStateToProps)(Auth) );
export const ProtectedRoute = withRouter( connect(mapStateToProps)(Protected) );