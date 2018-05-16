import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './views/components/App';
import TaskForm from './views/components/task-form';
import header from './views/components/header';
import TaskItem from './views/components/task-item';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={TaskForm} />
    <Route path="./views/components/task-form" component={TaskForm} />
  </Route>
);