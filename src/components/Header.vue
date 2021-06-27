<template>
	<header
		class="
			mx-4
			px-4
			py-2
			shadow-md
			rounded-2xl
			flex
			items-center
			justify-between
			bg-gray-50
		"
	>
		<h1 class="text-xl">To-Do List</h1>
		<button
			@click="add"
			class="
				bg-gradient-to-br
				from-purple-500
				to-indigo-600
				transition-transform
				transform
				hover:scale-105
				text-white
				px-4
				py-2
				rounded-xl
			"
		>
			New
		</button>
	</header>
</template>

<script>
export default {
	name: "Header",
	methods: {
		add() {
			this.$store.commit("add");
		},
	},
};
</script>
