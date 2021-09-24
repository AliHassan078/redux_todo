export const addTodo = (data) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id,
  };
};
export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
