import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { navigateToUrl } from 'single-spa'

const App = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/react">Tasklist in React</Link>
            </li>
            <li className="nav-item">
              <a href="/vue" onClick={navigateToUrl} className="nav-link">Counter in Vue</a>
              {/* <Link className="nav-link" to="/">Counter in Vue</Link> */}
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        {/* <Route path="/react">
          <About />
        </Route>
        <Route path="/vue">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </div>
  </Router>
);

export default App;