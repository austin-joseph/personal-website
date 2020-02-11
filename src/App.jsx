import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import resumeJson from './resume.json';
import ProjectDetails from './pages/projectDetails/ProjectDetails';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/*" render={(props) => <Home {...props} />} />
                    {/* <Route exact path="/" render={(props) => <Home {...props} />} />
                    {resumeJson["projects"].map((item) => {
                        return (<Route exact path={item["details"]} render={(props) => <ProjectDetails {...props} />} />)
                    })} */}
                </Switch>
            </Router>
        </React.Fragment>
    );
}
export default App;
