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
import axios from "axios";

export default {
    name: "App",
    mounted() {
        axios.get("/api/todos").then((res) => {
            this.$store.commit("setAll", res.data);
        });
    },
    components: {
        Header,
        NewTodo,
        Todos,
    },
};
</script>
