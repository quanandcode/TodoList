export const addToDo = (data) => {
  return {
    type: "todoList/addToDo",
    payload: data,
  };
};
export const toggleStatus = (todoId) => {
  return {
    type: "todoList/toggleStatus",
    payload: todoId,
  };
};
export const changeSearch = (text) => {
  return {
    type: "filter/changeSearch",
    payload: text,
  };
};

export const changeFilterStatus = (status) => {
  return {
    type: "filter/changeFilterStatus",
    payload: status,
  };
};
export const changeFilterPriority = (priorityList) => {
  return {
    type: "filter/changeFilterPriority",
    payload: priorityList,
  };
};
