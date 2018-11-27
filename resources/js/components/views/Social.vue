<template>
    <div class="social">
        <el-form>
            <el-input placeholder="Name" v-model="form.name"></el-input>
            <el-input placeholder="URL" v-model="form.url"></el-input>
            <el-button type="primary" @click="onSubmit">Create</el-button>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted() {
        // For adding the token to axios header (add this only one time).
        var token = document.head.querySelector('meta[name="csrf-token"]');
        window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
    },
    data() {
        return {
            form: {
                name: '',
                url: ''
            }
        }
    },
    methods: {
        onSubmit() {
            let formData = this.form;

            axios.post('/api/social', {
                name: formData.name,
                url: formData.url
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
