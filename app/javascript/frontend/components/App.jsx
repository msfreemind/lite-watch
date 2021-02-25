import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container.jsx';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SearchContainer from './search/search_container';
import VideoSubmitContainer from './video/video_submit_container';
import VideoEditContainer from './video/video_edit_container';
import VideoShowContainer from './video/video_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';
import FilterFormContainer from './greeting/filter_form_container.js';

const App = () => {
  return (
    <div>
      <header className="header">
        <Link to="/"><h1>FeatureMe</h1></Link>
        <FilterFormContainer/>
        <GreetingContainer/>            
      </header>

      <main className="content">
        <AuthRoute path="/login" component={LoginFormContainer}/>
        <AuthRoute path="/signup" component={SignupFormContainer}/>

        <Route exact path="/" component={SearchContainer}/>

        <Switch>
          <ProtectedRoute path="/videos/new" component={VideoSubmitContainer} />
          <ProtectedRoute path="/videos/edit/:videoId" component={VideoEditContainer} />
          <Route path="/videos/:videoId" component={VideoShowContainer} />        
        </Switch>
      </main>
    </div>  
  );
}

export default App;