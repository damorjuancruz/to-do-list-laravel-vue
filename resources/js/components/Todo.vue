<template>
	<div
		:class="`flex gap-2 px-4 py-2 transition-colors ${
			$store.state.editing === data.id
				? 'bg-gray-100'
				: 'hover:bg-gray-100'
		} `"
	>
		<input
			v-model="text"
			:disabled="$store.state.editing !== data.id"
			ref="input"
			:class="`flex-auto bg-transparent transition ${
				$store.state.editing === data.id
					? 'border-b -mb-px border-gray-400'
					: ''
			}`"
		/>
		<button @click="toggleEdit" class="flex">
			<i class="material-icons text-purple-600">{{
				$store.state.editing === data.id ? "save" : "edit"
			}}</i>
		</button>
		<button
			v-if="$store.state.editing !== data.id"
			@click="toggleDone"
			class="flex"
		>
			<i class="material-icons text-blue-600">{{
				data.done ? "check_box" : "check_box_outline_blank"
			}}</i>
		</button>
		<button
			v-if="$store.state.editing === data.id"
			@click="remove"
			class="flex"
		>
			<i class="material-icons text-pink-600">delete</i>
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
			if (this.$store.state.editing === -1) {
				await this.$store.commit("setEditing", this.data.id);
				this.$refs.input.focus();
				return;
			}
			if (this.$store.state.editing === this.data.id) {
				this.$store.commit("editText", {
					id: this.data.id,
					text: this.text,
				});
				this.$store.commit("setEditing", -1);
			}
		},
		remove() {
			this.$store.commit("setEditing", -1);
			this.$store.commit("remove", this.data.id);
		},
	},
};
</script>
