<template>
    <div class="questionnaire">
        <form>
            <div class="input-group" v-if="id == 1">form group 1</div>
            <div class="input-group" v-if="id == 2">form group 2</div>
            <div class="input-group" v-if="id == 3">form group 3</div>

            <el-button @click="prev">Prev</el-button>
            <el-button @click="next">Next</el-button>
        </form>
    </div>
</template>

<script>
// import idMixin from '../../mixins/id';

export default {
    mounted() {
        let inputs = document.querySelectorAll('.input-group');
        console.log(inputs);

        window.onbeforeunload = function() {
        return "Data will be lost if you leave the page, are you sure?";
        };
    },
    computed: {
        id: {
            get() {
                return this.$route.params.id;
            },
            set(counter) {
                console.log(counter);
                this.$router.push({ 
                    path: `/dashboard/questionnaire/${counter}` 
                })
            }
        }

    },
    data: function() {
        return {
            counter: this.id
        }
    },
    methods: {
        prev() {
            if (this.id > 1) {
                --this.id;
            }
        },
        next() {
            if (this.id < 3) {
                ++this.id;
            }
        }
    }
}
</script>
