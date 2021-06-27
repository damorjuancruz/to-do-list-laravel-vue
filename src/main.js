import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./index.css";

// Create a new store instace
const store = createStore({
	state() {
		return {
			showNewTodo: false,
			editing: -1,
			todos: [],
		};
	},
	mutations: {
		toggleShowNewTodo(state) {
			state.showNewTodo = !state.showNewTodo;
		},
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
		setEditing(state, id) {
			state.editing = id;
		},
		editText(state, { id, text }) {
			state.todos = state.todos.map((todo) =>
				todo.id === id
					? {
							...todo,
							text,
					  }
					: todo
			);
		},
	},
});

const app = createApp(App);
app.use(store);
app.mount("#app");
