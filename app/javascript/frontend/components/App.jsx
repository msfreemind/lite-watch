import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SearchContainer from './search/search_container';
import VideoFormContainer from './video/video_form_container';
import VideoShowContainer from './video/video_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

const App = () => {
  return (
    <div>
      <header>
        <h1>FeatureMe</h1>
        <GreetingContainer/>            
      </header>

      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>

      <Route path="/feed" component={SearchContainer}/>

      <Switch>
        <ProtectedRoute exact path="/videos/new" component={VideoFormContainer} />
        <Route path="/videos/:videoId" component={VideoShowContainer} />        
      </Switch>
    </div>  
  );
}

export default App;