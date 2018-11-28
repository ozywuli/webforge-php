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
    methods: {
        onSubmit() {
            let formData = this.form;

            axios.post('/api/meta', {
                name: formData.name,
                title: formData.title,
                description: formData.description,
                keywords: formData.keywords
            }, {
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(window.localStorage.getItem('passportToken')).token
                }
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            })
            
        }
    }
}
</script>
