import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import { Router, Route, browserHistory, IndexRoute, Link } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="articles">Articles</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

App.defaultProps = {
  headerTitle: 'Header not yet',
  contentTitle: 'Content not yet',
  contentBody: 'Body not yet'
}

export default App;

class Home extends Component {
  render() {
    return (
      <h2>Hey, I am HOME!</h2>
    );
  }
}

class About extends Component {
  render() {
    return (
      <h2>Hey, I am ABOUT!</h2>
    );
  }
}

class Articles extends Component {
  render() {
    return (
      <h2>Hey, I am ARTICLES!</h2>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="articles" component={Articles} />
    </Route>
  </Router>
  , rootElement);
