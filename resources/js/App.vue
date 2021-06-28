<template>
	<div class="my-8 m-auto w-full max-w-xl flex flex-col gap-4">
		<Header />
		<NewTodo />
		<Todos />
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import NewTodo from "./components/NewTodo.vue";
import Todos from "./components/Todos.vue";

export default {
	name: "App",
	components: {
		Header,
		NewTodo,
		Todos,
	},
};
</script>
