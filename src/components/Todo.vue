<template>
	<div class="flex gap-2 px-4 py-2 hover:bg-gray-100">
		<input
			v-model="text"
			:disabled="$store.state.editing !== data.id"
			ref="input"
			class="flex-auto bg-transparent"
		/>
		<button @click="toggleEdit" class="flex">
			<i class="material-icons text-purple-500">{{
				$store.state.editing === data.id ? "check" : "edit"
			}}</i>
		</button>
		<button
			v-if="$store.state.editing !== data.id"
			@click="toggleDone"
			class="flex"
		>
			<i class="material-icons text-indigo-500">{{
				data.done ? "check_box" : "check_box_outline_blank"
			}}</i>
		</button>
		<button
			v-if="$store.state.editing === data.id"
			@click="remove"
			class="flex"
		>
			<i class="material-icons text-pink-500">delete</i>
		</button>
	</div>
</template>

<script>
export default {
	name: "Todo",
	props: {
		data: Object,
	},
	data() {
		return {
			text: this.data.text,
		};
	},
	methods: {
		toggleDone() {
			this.$store.commit("toggleDone", this.data.id);
		},
		async toggleEdit() {
			if (this.data.id !== this.$store.state.editing) {
				await this.$store.commit("setEditing", this.data.id);
				this.$refs.input.focus();
				return;
			}
			this.$store.commit("editText", {
				id: this.data.id,
				text: this.text,
			});
			this.$store.commit("setEditing", -1);
		},
	},
};
</script>
