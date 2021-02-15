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
    const timeoutID = setTimeout(
      () => (text ? setDebouncedText(text) : setText(debouncedText)),
      3000
    );

    return () => clearTimeout(timeoutID);
  }, [text, debouncedText]);

  useEffect(() => {
    let checkStyles, textStyles, checkBackground;

    if (completed) {
      checkBackground = 'transparent';

      checkStyles = {
        background:
          'url(/images/icon-check.svg) no-repeat center / 40% 40%, linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
        border: 'none'
      };

      textStyles = {
        textDecoration: 'line-through',
        color: theme.todo.fontCompleted
      };
    } else {
      checkBackground = theme.background;

      checkStyles = {
        background: '',
        border: `1px solid ${theme.check.border}`
      };
      textStyles = {
        textDecoration: 'none',
        color: theme.todo.font
      };
    }

    textRef.current.style.setProperty(
      '--placeholder-color',
      theme.todo.placeholder
    );
    checkRef.current.style.setProperty('--check-background', checkBackground);

    Object.assign(checkRef.current.style, checkStyles);
    Object.assign(textRef.current.style, textStyles);
  }, [theme, completed]);

  useEffect(() => {
    if (onTodoChange) onTodoChange({ id, text: debouncedText, completed });
  }, [id, debouncedText, completed, onTodoChange]);

  const onTodoSubmit = e => {
    e.preventDefault();

    if (onNewTodo) {
      // Reset AddTodo form elements
      setText('');
      setCompleted(false);

      onNewTodo({ text, completed });
    }
  };

  return (
    <form className="todo-item" onSubmit={onTodoSubmit}>
      <div
        ref={checkRef}
        className="todo-check"
        onClick={() => setCompleted(!completed)}
      >
        <span></span>
      </div>
      <div className="field ui transparent input">
        <input
          ref={textRef}
          className="todo-text"
          type="text"
          placeholder={
            onNewTodo ? 'Create a new todo...' : 'Type something to todo..'
          }
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </div>
      {onTodoChange ? (
        <div
          className="todo-delete one wide column"
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
