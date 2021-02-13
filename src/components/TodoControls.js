import React from 'react';

const TodoControls = ({ todosLeft, onFilter, onClearCompleted }) => {
  return (
    <div className="todo-controls">
      <span className="items-left">{todosLeft} items left</span>
      <div className="filters" onClick={e => onFilter(e.target.dataset.filter)}>
        <span data-filter="all">All</span>
        <span data-filter="active">Active</span>
        <span data-filter="completed">Completed</span>
      </div>
      <span className="clear-completed" onClick={onClearCompleted}>
        Clear Completed
      </span>
    </div>
  );
};

export default TodoControls;
