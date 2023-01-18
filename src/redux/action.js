export const addToDo = (data) => {
  return {
    type: "todoList/addToDo",
    payLoad: data,
  };
};
export const toggleStatus = (todoId) => {
  return {
    type: "todoList/toggleStatus",
    payLoad: todoId,
  };
};
export const changeSearch = (text) => {
  return {
    type: "filter/changeSearch",
    payLoad: text,
  };
};

export const changeFilterStatus = (status) => {
  return {
    type: "filter/changeFilterStatus",
    payLoad: status,
  };
};
export const changeFilterPriority = (priorityList) => {
  return {
    type: "filter/changeFilterPriority",
    payLoad: priorityList,
  };
};
