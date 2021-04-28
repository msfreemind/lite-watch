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
import NotFound from './not_found.jsx'
import Splash from './splash.jsx';

const App = () => {
  return (
    <div className="page">
      <header className="header">
        <Link to="/feed"><h1>LiteWatch</h1></Link>
        <FilterFormContainer/>
        <GreetingContainer/>            
      </header>

      <div className="page-content">
        <main className="content">
          <Switch>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>

            <Route exact path="/" component={Splash}/>
            <Route exact path="/feed" component={SearchContainer}/>
          
            <ProtectedRoute path="/videos/new" component={VideoSubmitContainer} />
            <ProtectedRoute path="/videos/edit/:videoId" component={VideoEditContainer} />
            <Route path="/videos/:videoId" component={VideoShowContainer} />
            <Route component={NotFound} />      
          </Switch>
        </main>

        <footer>© 2021, LiteWatch</footer>
      </div>
    </div>  
  );
}

export default App;