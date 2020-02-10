import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/*" render={(props) => <Home {...props} />} />
                </Switch>
            </Router>
        </React.Fragment>
    );
}
export default App;
