<template>
    <form
        @submit="add"
        autocomplete="off"
        :class="`mx-4 px-4 shadow-md rounded-lg flex items-center gap-3 bg-gray-50 transition-all overflow-hidden ${
            $store.state.showNewTodo ? 'max-h-14 py-2' : 'max-h-0 -my-2'
        }`"
    >
        <input
            type="text"
            name="newTodoText"
            class="bg-transparent flex-1 border-b border-gray-400"
            v-model="text"
        />
        <button
            type="button"
            @click="toggleNewTodo"
            class="
                bg-gradient-to-br
                from-pink-600
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
                from-purple-600
                to-blue-600
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
import axios from "axios";
export default {
    name: "NewTodo",
    data() {
        return {
            text: "",
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
            let newTodo = {
                text: this.text,
                done: false,
            };
            console.log(newTodo);
            axios.post("/api/todos", newTodo).then((res) => {
                this.$store.commit("add", res.data);
                this.text = "";
                this.$store.commit("toggleShowNewTodo");
            });
        },
    },
};
</script>
