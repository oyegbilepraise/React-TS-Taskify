import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

interface Props {
  todos: Todo[];
  completedTodos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
  return (
    <div className="container">
      <div className="todos">

        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo, index) => (
          <SingleTodo
          index={index}
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
          />
          ))}
          </div>
          <div className="todos remove" >

        <span className="todos__heading">Completed Tasks</span>
        {completedTodos.map((todo, index) => (
          <SingleTodo
          index={index}
          todo={todo}
          key={todo.id}
          todos={completedTodos}
          setTodos={setCompletedTodos}
          />
          ))}
          </div>
      {/* <Droppable droppableId="TodoList">
        {(provided) => (
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodoRemove">
        {(provided) => (
          <div
            className="todos remove"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {provided.placeholder}
          </div>
        )}
      </Droppable> */}
    </div>
    // <div className="todos">
    // </div>
  );
};

export default TodoList;
