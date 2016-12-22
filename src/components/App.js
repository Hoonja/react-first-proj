import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  sayHey() {
    alert('Hey');
  }

  render() {
    let text = 'Dev-Server';

    let pStyle = {
      color: 'aqua',
      backgroundColor: 'black'
    };

    return (
      <div>
        <Header title={this.props.headerTitle}/>
        <Content
          title={this.props.contentTitle}
          body={this.props.contentBody}
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
