import React from 'react';
import TodoHeader from './TodoHeader';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import TodoControls from './TodoControls';
import './Todo.css';

const defaultTodos = [
  {
    id: 1,
    text: 'Complete online JavaScript course',
    completed: true
  },
  {
    id: 2,
    text: 'Jog arround the park 3x',
    completed: false
  },
  {
    id: 3,
    text: '10 minutes meditation',
    completed: false
  },
  {
    id: 4,
    text: 'Read for 1 hour',
    completed: false
  },
  {
    id: 5,
    text: 'Pick up groceries',
    completed: false
  },
  {
    id: 6,
    text: 'Complete Todo App on Frontend Mentor',
    completed: false
  }
];

class Todo extends React.Component {
  state = {
    todos: defaultTodos,
    filter: 'all'
  };

  filteredTodos = () => {
    const { todos, filter } = this.state;

    if (filter === 'active') return todos.filter(todo => !todo.completed);

    if (filter === 'completed') return todos.filter(todo => todo.completed);

    return todos;
  };

  onFilterChange = filter => this.setState({ filter });

  todosLeft = () => this.state.todos.filter(todo => !todo.completed).length;

  onTodoChange = ({ id, text, completed }) =>
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.text = text;
          todo.completed = completed;
        }

        return todo;
      })
    });

  onNewTodo = ({ text, completed }) => {
    const lastID = this.state.todos ? this.state.todos.length : 0;
    const id = lastID + 1;
    const newTodo = { id, text, completed };
    this.setState(prevState => ({ todos: [...prevState.todos, newTodo] }));
  };

  onTodoDelete = id =>
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id)
    }));

  onClearCompleted = () =>
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => !todo.completed)
    }));

  render() {
    const { darkTheme, theme, onThemeChange } = this.props;

    return (
      <main className="todo">
        <TodoHeader darkTheme={darkTheme} onThemeChange={onThemeChange} />
        <AddTodo theme={theme} onNewTodo={this.onNewTodo} />
        <TodoList
          theme={theme}
          todos={this.filteredTodos()}
          onTodoChange={this.onTodoChange}
          onTodoDelete={this.onTodoDelete}
        />
        <TodoControls
          todosLeft={this.todosLeft()}
          onFilter={this.onFilterChange}
          onClearCompleted={this.onClearCompleted}
        />
        <p className="todo-info" style={{ color: theme.info }}>
          Drag and drop to reorder list
        </p>
      </main>
    );
  }
}

export default Todo;
