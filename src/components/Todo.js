import React from 'react';
import TodoHeader from './TodoHeader';
import AddTodo from './AddTodo';
import './Todo.css';

class Todo extends React.Component {
  render() {
    const { darkTheme, onThemeChange } = this.props;
    return (
      <main className="todo">
        <TodoHeader darkTheme={darkTheme} onThemeChange={onThemeChange} />
        <AddTodo darkTheme={darkTheme} />
      </main>
    );
  }
}

export default Todo;
