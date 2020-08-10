import React from 'react';
import './App.css';
import Menu from './components/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllCourses from './views/AllCourses';
import EnrolledCourses from './views/EnrolledCourses';
import CourseTable from './components/CourseTable';
function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path="/" exact>
          <AllCourses />
        </Route>
        <Route path="/enrolled-courses">
          <EnrolledCourses />
        </Route>
        <Route path="/debug">
          <CourseTable />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
