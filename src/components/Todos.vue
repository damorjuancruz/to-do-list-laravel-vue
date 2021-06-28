<template>
	<div
		v-if="$store.state.todos.length"
		class="mx-4 overflow-hidden shadow-md rounded-lg bg-gray-50"
	>
		<Todo v-for="todo in $store.state.todos" :key="todo.id" :data="todo" />
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
