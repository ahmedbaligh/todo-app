import React from 'react';
import Header from './Header';
import Todo from './Todo';

const themeConfig = {
  light: {
    body: 'hsl(0, 0%, 98%)',
    background: 'hsl(0, 0%, 98%)',
    border: 'hsl(236, 33%, 92%)',
    check: {
      border: 'hsl(236, 33%, 92%)',
      borderCompleted: 'hsl(0, 0%, 98%)'
    },
    todo: {
      font: 'hsl(235, 19%, 35%)',
      fontCompleted: 'hsl(233, 11%, 84%)',
      placeholder: 'hsl(236, 9%, 61%)'
    },
    controls: {
      color: 'hsl(236, 9%, 61%)',
      hover: 'hsl(235, 19%, 35%)'
    },
    info: 'hsl(236, 9%, 61%)'
  },
  dark: {
    body: 'hsl(235, 21%, 11%)',
    background: 'hsl(235, 24%, 19%)',
    border: 'hsl(237, 14%, 26%)',
    check: {
      border: 'hsl(237, 14%, 26%)',
      borderCompleted: 'hsl(235, 24%, 19%)'
    },
    todo: {
      font: 'hsl(234, 39%, 85%)',
      fontCompleted: 'hsl(233, 14%, 35%)',
      placeholder: 'hsl(234, 11%, 52%)'
    },
    controls: {
      color: 'hsl(234, 11%, 52%)',
      hover: 'hsl(236, 33%, 92%)'
    },
    info: 'hsl(233, 14%, 35%)'
  }
};

class App extends React.Component {
  state = { darkTheme: false };

  onThemeChange = () =>
    this.setState(prevState => ({ darkTheme: !prevState.darkTheme }));

  render() {
    const { darkTheme } = this.state;
    const theme = darkTheme ? themeConfig.dark : themeConfig.light;
    document.body.style.backgroundColor = theme.body;

    return (
      <div>
        <Header darkTheme={darkTheme} />
        <Todo
          darkTheme={darkTheme}
          theme={theme}
          onThemeChange={this.onThemeChange}
        />
        <footer>
          <div className="attribution">
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by{' '}
            <a
              href="https://github.com/ahmedbaligh"
              target="_blank"
              rel="noreferrer"
            >
              Ahmed Baligh
            </a>
            .
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
