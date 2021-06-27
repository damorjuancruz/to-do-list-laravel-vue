import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./index.css";

// Create a new store instace
const store = createStore({
	state() {
		return {
			showAddNew: false,
			todos: [],
		};
	},
	mutations: {
		add(state, todo) {
			state.todos = [...state.todos, todo];
		},
		toggleDone(state, id) {
			state.todos = state.todos.map((todo) =>
				todo.id === id
					? {
							...todo,
							done: !todo.done,
					  }
					: todo
			);
		},
	},
});

const app = createApp(App);
app.use(store);
app.mount("#app");
