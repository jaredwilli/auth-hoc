import React from 'react';
import Header from './Header';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Resources from './Resources';
import Auth from './AuthHoc';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/resources" component={Auth(Resources)} />
                </Switch>

            </div>
        );
    }
}

export default App;
