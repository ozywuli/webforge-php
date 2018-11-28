<template>
    <div class="meta">
        <el-form>
            <el-input
                placeholder="name"
                v-model="form.name"
            ></el-input>
            <el-input
                placeholder="title"
                v-model="form.title"
            ></el-input>
            <el-input
                placeholder="description"
                v-model="form.description"
            ></el-input>
            <el-input
                placeholder="keywords"
                v-model="form.keywords"
            ></el-input>

            <el-button
                type="primary"
                @click="onSubmit"
            >Save</el-button>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted() {

    },
    data() {
        return {
            form: {
                name: '',
                title: '',
                description: '',
                keywords: ''
            }
        }
    },
    onSubmit() {
        console.log('save');
    }
}
</script>
