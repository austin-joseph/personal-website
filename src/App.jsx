import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import ProjectDetails from './pages/projectDetails/ProjectDetails';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    {/* <Route path="/*" render={(props) => <NavigationBar {...props} />} /> */}
                    <Route exact path="/projects/:projectname" render={(props) => <ProjectDetails {...props} />} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}
export default App;
