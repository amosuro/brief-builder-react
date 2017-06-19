var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var BriefBuilderApp = require('./components/BriefBuilderApp.react.jsx');
var LoginPage = require('./components/session/LoginPage.react.jsx');
var SignupPage = require('./components/session/SignupPage.react.jsx');

// Briefs
var BriefsPage = require('./components/briefs/BriefsPage.react.jsx');
var BriefPage = require('./components/briefs/BriefPage.react.jsx');
var BriefNew = require('./components/briefs/BriefNew.react.jsx');

module.exports = (
  <Route name="app" path="/" handler={BriefBuilderApp}>
    <DefaultRoute handler={BriefsPage} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="briefs" path="/briefs" handler={BriefsPage}/>
    <Route name="brief" path="/briefs/:briefId" handler={BriefPage} />
    <Route name="new-brief" path="/brief/new" handler={BriefNew}/>
  </Route>
);
