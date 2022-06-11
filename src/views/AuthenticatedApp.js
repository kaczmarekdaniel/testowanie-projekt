import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from 'views/Root.styles';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Notes from 'views/Notes';
import React from 'react';
import NewsSection from 'components/templates/NewsSection/NewsSection';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/news">
            <NewsSection />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
