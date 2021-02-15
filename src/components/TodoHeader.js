import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const TodoHeader = ({ darkTheme, onThemeChange }) => (
  <header className="todo-header">
    <h1 className="todo-header">Todo</h1>
    <ThemeSwitcher darkTheme={darkTheme} onThemeChange={onThemeChange} />
  </header>
);

export default TodoHeader;
