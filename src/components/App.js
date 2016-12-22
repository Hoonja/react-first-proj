import React from 'react';

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
        <h1>Hello Hoonja!</h1>
        <h2>Welcome to {text}</h2>
        <button onClick={this.sayHey}>Click Me</button>
        <p style={pStyle}>
          { NaN == NaN ? 'True' : 'False'}
        </p>
      </div>
    );
  }
}

export default App;
