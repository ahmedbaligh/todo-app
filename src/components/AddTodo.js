import React from 'react';
import TodoItem from './TodoItem';

class AddTodo extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: '25px' }}>
        <TodoItem darkTheme={this.props.darkTheme} />
      </div>
    );
  }
}

export default AddTodo;
