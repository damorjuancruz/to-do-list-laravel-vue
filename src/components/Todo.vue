<template>
	<div class="flex justify-between px-4 py-2 hover:bg-gray-100">
		{{ data.text }}
		<button @click="toggleDone" class="flex">
			<i class="material-icons-outlined text-indigo-500">{{
				data.done ? "check_box" : "check_box_outline_blank"
			}}</i>
		</button>
	</div>
</template>

<script>
export default {
	name: "Todo",
	props: {
		data: Object,
	},
	methods: {
		toggleDone() {
			this.$store.commit("toggleDone", this.data.id);
		},
	},
};
</script>
