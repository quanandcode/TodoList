import { createSelector } from "reselect";

const todoListSelectors = (state) => state.todoList;
const searchTextSelectors = (state) => state.filter.search;
const statusSelectors = (state) => state.filter.status;
const PrioritySelectors = (state) => state.filter.priority;
export const todoRemainingSelector = createSelector(
  todoListSelectors,
  statusSelectors,
  searchTextSelectors,
  PrioritySelectors,
  (todoList, status, searchText, priority) => {
    if (status == "All" && priority.length == 0) {
      return todoList.filter((todo) => {
        return todo.name.includes(searchText);
      });
    }
    return todoList.filter((todo) => {
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priority.length == 0 ? true : priority.includes(todo.priority))
      );
    });
  }
);

export default todoListSelectors;
