export const state = () => ({
  ToDoItems: []
});

export const mutations = {
  setNewToDo(state, data) {
    let cloneToDoItems = JSON.parse(JSON.stringify(state.ToDoItems));
    if (data.type == "add") {
      cloneToDoItems.push(data.item);
    } else {
      cloneToDoItems = cloneToDoItems.map(item => {
        if (item.id === data.item.id) {
          item.label = data.item.label;
        }
        return item;
      });
    }
    state.ToDoItems = cloneToDoItems;
  },

  removeAToDo(state, id) {
    let cloneToDoItems = JSON.parse(JSON.stringify(state.ToDoItems));
    const itemIndex = cloneToDoItems.findIndex(item => item.id === id);
    cloneToDoItems.splice(itemIndex, 1);
    state.ToDoItems = cloneToDoItems;
  }
};

export const getters = {
  getToDoItems(state) {
    return state.ToDoItems;
  }
};
