import React, { useState, useEffect, useRef } from 'react';

const TodoItem = ({
  id,
  todoText,
  todoCompleted,
  theme,
  onTodoChange,
  onNewTodo,
  onTodoDelete
}) => {
  const [text, setText] = useState(todoText ? todoText : '');
  const [completed, setCompleted] = useState(todoCompleted ? true : false);
  const [debouncedText, setDebouncedText] = useState(text);

  const textRef = useRef();
  const checkRef = useRef();

  useEffect(() => {
    const timeoutID = setTimeout(() => setDebouncedText(text), 1500);

    return () => clearTimeout(timeoutID);
  }, [text]);

  useEffect(() => {
    textRef.current.style.setProperty(
      '--placeholder-color',
      theme.todo.placeholder
    );

    let checkStyles, textStyles;

    if (completed) {
      checkStyles = {
        background:
          'url(/images/icon-check.svg) no-repeat center / 47% 47%, linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        borderColor: theme.check.borderCompleted
      };

      textStyles = {
        textDecoration: 'line-through',
        color: theme.todo.fontCompleted
      };
    } else {
      checkStyles = {
        background: 'transparent',
        borderColor: theme.check.border
      };

      textStyles = {
        textDecoration: 'none',
        color: theme.todo.font
      };
    }

    Object.assign(checkRef.current.style, checkStyles);
    Object.assign(textRef.current.style, textStyles);
  }, [theme, completed]);

  useEffect(() => {
    if (onTodoChange) onTodoChange({ id, text: debouncedText, completed });
  }, [id, debouncedText, completed, onTodoChange]);

  const onTodoSubmit = e => {
    e.preventDefault();

    // Reset AddTodo form elements
    setText('');
    setCompleted(false);

    if (onNewTodo) onNewTodo({ text, completed });
  };

  return (
    <form
      className="todo-item"
      style={{ background: theme.background }}
      onSubmit={onTodoSubmit}
    >
      <div
        ref={checkRef}
        className="todo-check"
        onClick={() => setCompleted(!completed)}
      ></div>
      <div className="field ui transparent input">
        <input
          ref={textRef}
          className="todo-text"
          type="text"
          placeholder="Create a new todo..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      {onTodoChange ? (
        <div
          className="todo-delete"
          style={{
            background: 'url(/images/icon-cross.svg) no-repeat center / 50% 50%'
          }}
          onClick={() => onTodoDelete(id)}
        ></div>
      ) : null}
    </form>
  );
};

export default TodoItem;
