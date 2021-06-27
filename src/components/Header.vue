<template>
	<header
		class="
			mx-4
			px-4
			py-2
			overflow-hidden
			shadow-md
			rounded-lg
			flex
			items-center
			justify-between
			bg-gray-50
		"
	>
		<h1 class="text-xl">To-Do List</h1>
		<button
			@click="toggleNewTodo"
			:class="`bg-gradient-to-br from-purple-500 to-indigo-600 transition-transform transform ${
				$store.state.showNewTodo ? 'translate-x-20' : ''
			} hover:scale-105 text-white px-4 py-2 rounded-lg`"
		>
			New
		</button>
	</header>
</template>

<script>
export default {
	name: "Header",
	methods: {
		toggleNewTodo() {
			this.$store.commit("toggleShowNewTodo");
		},
	},
};
</script>
