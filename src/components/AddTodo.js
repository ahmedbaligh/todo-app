import React from 'react';
import TodoItem from './TodoItem';

export default function AddTodo({ theme, onNewTodo }) {
  return (
    <div className="add-todo" style={{ backgroundColor: theme.background }}>
      <TodoItem theme={theme} onNewTodo={onNewTodo} />
    </div>
  );
}
