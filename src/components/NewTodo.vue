<template>
	<form
		@submit="add"
		autocomplete="off"
		:class="`mx-4 px-4 shadow-md rounded-lg flex items-center gap-2 bg-gray-50 transition-all overflow-hidden ${
			$store.state.showNewTodo ? 'max-h-14 py-2' : 'max-h-0 -my-2'
		}`"
	>
		<input
			type="text"
			name="newTodoText"
			class="bg-transparent flex-1"
			v-model="text"
		/>
		<button
			type="button"
			@click="toggleNewTodo"
			class="
				bg-gradient-to-br
				from-pink-500
				to-red-500
				transition-transform
				transform
				hover:scale-105
				text-white
				px-4
				py-2
				rounded-lg
			"
		>
			Cancel
		</button>
		<button
			type="submit"
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
				rounded-lg
			"
		>
			Add
		</button>
	</form>
</template>

<script>
export default {
	name: "NewTodo",
	data() {
		return {
			id: 0,
			text: "",
			done: false,
		};
	},
	methods: {
		toggleNewTodo() {
			this.text = "";
			this.$store.commit("toggleShowNewTodo");
		},
		add(e) {
			e.preventDefault();
			if (!this.text) return;
			this.$store.commit("add", {
				id: this.id,
				text: this.text,
				done: this.done,
			});
			this.text = "";
			this.id =
				this.$store.state.todos[this.$store.state.todos.length - 1].id +
				1;
			this.$store.commit("toggleShowNewTodo");
		},
	},
};
</script>
