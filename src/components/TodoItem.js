import React, { useState, useEffect, useRef } from 'react';

const themeConfig = {
  light: {
    background: 'hsl(0, 0%, 98%)',
    check: {
      border: 'hsl(236, 33%, 92%)',
      borderCompleted: 'hsl(0, 0%, 98%)'
    },
    todo: {
      font: 'hsl(235, 19%, 35%)',
      fontCompleted: 'hsl(233, 11%, 84%)',
      placeholder: 'hsl(236, 9%, 61%)'
    }
  },
  dark: {
    background: 'hsl(235, 24%, 19%)',

    check: {
      border: 'hsl(237, 14%, 26%)',
      borderCompleted: 'hsl(235, 24%, 19%)'
    },
    todo: {
      font: 'hsl(234, 39%, 85%)',
      fontCompleted: 'hsl(233, 14%, 35%)',
      placeholder: 'hsl(234, 11%, 52%)'
    }
  }
};

const TodoItem = ({ todoText, darkTheme }) => {
  const [todo, setTodo] = useState(todoText ? todoText : '');
  const [completed, setCompleted] = useState(false);

  const textRef = useRef();
  const checkRef = useRef();

  const theme = darkTheme ? themeConfig.dark : themeConfig.light;

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

  const onTodoSubmit = e => {
    e.preventDefault();
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
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
      </div>
    </form>
  );
};

export default TodoItem;
