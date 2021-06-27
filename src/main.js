import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./index.css";

// Create a new store instace
const store = createStore({
	state() {
		return {
			todos: [],
		};
	},
	mutations: {
		add(state) {
			state.todos = [
				...state.todos,
				{
					id: Math.floor(Math.random() * 100000),
					text: "hola",
					done: false,
				},
			];
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
