import React from 'react';
import Header from './Header';
import Todo from './Todo';

const themeConfig = {
  light: {
    background: 'hsl(0, 0%, 98%)',
    check: {
      border: 'hsl(236, 33%, 92%)',
      borderCompleted: 'hsl(0, 0%, 98%)'
    },
    todo: {
      font: 'hsl(235, 19%, 35%)',
      fontCompleted: 'hsl(233, 11%, 84%)',
      placeholder: 'hsl(236, 9%, 61%)'
    },
    info: 'blue'
  },
  dark: {
    background: 'hsl(235, 24%, 19%)',

    check: {
      border: 'hsl(237, 14%, 26%)',
      borderCompleted: 'hsl(235, 24%, 19%)'
    },
    todo: {
      font: 'hsl(234, 39%, 85%)',
      fontCompleted: 'hsl(233, 14%, 35%)',
      placeholder: 'hsl(234, 11%, 52%)'
    },
    info: 'red'
  }
};

class App extends React.Component {
  state = { darkTheme: false };

  onThemeChange = () => this.setState({ darkTheme: !this.state.darkTheme });

  render() {
    const { darkTheme } = this.state;
    const theme = darkTheme ? themeConfig.dark : themeConfig.light;

    return (
      <div>
        <Header darkTheme={darkTheme} />
        <Todo
          darkTheme={darkTheme}
          theme={theme}
          onThemeChange={this.onThemeChange}
        />
      </div>
    );
  }
}

export default App;
