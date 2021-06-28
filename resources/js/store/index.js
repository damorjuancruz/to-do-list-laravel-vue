import { createStore } from "vuex";
import mutations from "./mutations";

export default createStore({
    state() {
        return {
            showNewTodo: false,
            editing: -1,
            todos: [],
        };
    },
    mutations,
});
