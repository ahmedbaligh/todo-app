import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TodoItem from './TodoItem';

// Styling dragged todo
const styleDraggedTodo = (isDragging, draggableStyle, theme) => ({
  borderColor: isDragging ? 'none' : theme.border,

  background: isDragging
    ? 'linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
    : '',
  cursor: isDragging ? 'all-scroll' : '',
  borderRadius: isDragging ? '40px' : '',

  // Styles to apply on draggables
  ...draggableStyle
});

const TodoList = ({ theme, todos, onChange, onDelete, onDrag }) => (
  <DragDropContext onDragEnd={onDrag}>
    <Droppable droppableId="todos">
      {provided => (
        <div
          className="todo-list"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {todos.map(({ id, text, completed }, index) => (
            <Draggable key={id} draggableId={id} index={index}>
              {(provided, snapshot) => (
                <div
                  className="todo-item-container"
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  style={styleDraggedTodo(
                    snapshot.isDragging,
                    provided.draggableProps.style,
                    theme
                  )}
                >
                  <TodoItem
                    isDragging={snapshot.isDragging}
                    theme={theme}
                    id={id}
                    todoText={text}
                    todoCompleted={completed}
                    onTodoChange={onChange}
                    onTodoDelete={onDelete}
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </DragDropContext>
);

export default TodoList;
