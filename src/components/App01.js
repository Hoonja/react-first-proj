import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Math.round(Math.random()*100)
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(randomValue) {
    this.setState({
      value: randomValue
    });
  }

  render() {
    return (
      <div>
        <Header title={this.props.headerTitle}/>
        <Content
          title={this.props.contentTitle}
          body={this.props.contentBody}
          />
        <RandomNumber
          number={this.state.value}
          onUpdate={this.updateValue}
          />
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
