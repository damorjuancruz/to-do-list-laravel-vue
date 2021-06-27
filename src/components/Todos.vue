<template>
	<div
		class="mx-4 my-4 py-2 overflow-hidden shadow-md rounded-2xl bg-gray-50"
	>
		<Todo v-for="todo in $store.state.todos" :key="todo.id" :data="todo" />
		<span v-if="!$store.state.todos.length" class="px-4"
			>Nothing to do</span
		>
	</div>
</template>

<script>
import Todo from "./Todo.vue";

export default {
	name: "Todos",
	components: {
		Todo,
	},
};
</script>
