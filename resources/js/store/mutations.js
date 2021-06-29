export default {
    // showNewTodo
    toggleShowNewTodo(state) {
        state.showNewTodo = !state.showNewTodo;
    },

    // todos
    add(state, todo) {
        state.todos = [...state.todos, todo];
    },
    setAll(state, todos) {
        state.todos = todos;
    },
    replace(state, edited) {
        state.todos = state.todos.map((todo) =>
            todo.id === edited.id ? edited : todo
        );
    },
    remove(state, id) {
        state.todos = state.todos.filter((todo) => todo.id !== id);
    },
};
