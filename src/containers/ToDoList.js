import React from "react";
import Todo from "./ToDo";
import { connect } from "react-redux";

const ToDoList = ({ todos }) => {
  console.log(todos);
  const displayToDos = todos.map((todo) => {
    return <Todo {...todo} key={todo.id} />;
  });
  return <ul>{displayToDos}</ul>;
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(ToDoList);
