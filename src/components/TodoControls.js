import React, { useEffect, useRef } from 'react';

const TodoControls = ({ theme, todosLeft, onFilter, onClear }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.style.setProperty('--filter-color', theme.controls.color);
    ref.current.style.setProperty('--filter-hover', theme.controls.hover);
  });

  const onFilterChange = target => {
    onFilter(target.dataset.filter);
    Array.from(target.parentElement.children).forEach(child =>
      child.classList.remove('active')
    );
    target.classList.add('active');
  };

  return (
    <div ref={ref} className="todo-controls ui text menu">
      <span className="items-left item">{todosLeft} items left</span>
      <div
        className="filters ui text menu "
        onClick={e => onFilterChange(e.target)}
      >
        <span className="link item active" data-filter="all">
          All
        </span>
        <span className="link item" data-filter="active">
          Active
        </span>
        <span className="link item" data-filter="completed">
          Completed
        </span>
      </div>
      <span className="clear-completed link item" onClick={onClear}>
        Clear Completed
      </span>
    </div>
  );
};

export default TodoControls;
