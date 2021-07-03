<template>
    <div
        :class="`flex gap-2 px-4 overflow-y-hidden transition-all ${
            editing ? 'bg-gray-100' : 'hover:bg-gray-100'
        } ${expanded ? 'max-h-10 py-2' : 'max-h-0'} `"
    >
        <input
            v-model="text"
            :disabled="!editing"
            ref="input"
            :class="`flex-auto bg-transparent transition ${
                editing ? 'border-b -mb-px border-gray-400' : ''
            }`"
        />
        <button @click="toggleEdit" class="flex">
            <i class="material-icons text-purple-600">{{
                editing ? "save" : "edit"
            }}</i>
        </button>
        <button v-if="!editing" @click="toggleDone" class="flex">
            <i class="material-icons text-blue-600">{{
                data.done ? "check_box" : "check_box_outline_blank"
            }}</i>
        </button>
        <button v-if="editing" @click="remove" class="flex">
            <i class="material-icons text-pink-600">delete</i>
        </button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Todo",
    props: {
        data: Object,
    },
    data() {
        return {
            text: this.data.text,
            editing: false,
            expanded: false,
        };
    },
    updated() {
        if (this.editing) this.$refs.input.focus();
    },
    mounted() {
        setTimeout(() => {
            this.expanded = true;
        }, 0);
    },
    methods: {
        async toggleDone() {
            try {
                this.$store.commit("replace", {
                    ...this.data,
                    done: !this.data.done, // toggle the done property in the front-end regardless of the result of the request
                });
                await axios.put(`/api/todos/${this.data.id}`, {
                    done: !this.data.done,
                });
            } catch (_) {
                this.$store.commit("replace", {
                    ...this.data,
                    done: !this.data.done, // correct the front-end if there was an error
                });
            }
        },
        async toggleEdit() {
            if (!this.editing) {
                this.editing = true;
                return;
            }
            this.editing = false;
            if (this.text !== this.data.text) {
                try {
                    const res = await axios.put(`/api/todos/${this.data.id}`, {
                        text: this.text,
                    });
                    this.$store.commit("replace", res.data);
                } catch (_) {
                    this.editing = true;
                }
            }
        },
        async remove() {
            try {
                this.expanded = false;
                await axios.delete(`/api/todos/${this.data.id}`);
                this.$store.commit("remove", this.data.id);
            } catch (_) {
                this.expanded = true;
            }
        },
    },
};
</script>
