import React from 'react';
import Header from './Header';
import Todo from './Todo';

class App extends React.Component {
  state = { darkTheme: false };

  onThemeChange = () => this.setState({ darkTheme: !this.state.darkTheme });

  render() {
    const { darkTheme } = this.state;

    return (
      <React.Fragment>
        <Header darkTheme={darkTheme} />
        <Todo darkTheme={darkTheme} onThemeChange={this.onThemeChange} />
      </React.Fragment>
    );
  }
}

export default App;
