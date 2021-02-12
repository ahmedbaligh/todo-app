import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ theme, todos, onTodoChange, onTodoDelete }) => (
  <div className="todo-list">
    {todos.map(({ id, text, completed }) => (
      <React.Fragment key={id}>
        <TodoItem
          theme={theme}
          id={id}
          todoText={text}
          todoCompleted={completed}
          onTodoChange={onTodoChange}
          onTodoDelete={onTodoDelete}
        />
      </React.Fragment>
    ))}
  </div>
);

export default TodoList;
