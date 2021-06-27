<template>
	<div class="my-8 m-auto w-full max-w-xl">
		<Header />
		<Todos />
	</div>
</template>

<script>
import Header from "./components/Header.vue";
import Todos from "./components/Todos.vue";

export default {
	name: "App",
	components: {
		Header,
		Todos,
	},
};
</script>
