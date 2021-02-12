import React from 'react';
import TodoItem from './TodoItem';

export default function AddTodo({ theme, onNewTodo }) {
  return (
    <div style={{ marginBottom: '25px' }}>
      <TodoItem theme={theme} onNewTodo={onNewTodo} />
    </div>
  );
}
