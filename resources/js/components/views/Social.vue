<template>
    <div class="social">
        <el-form>
            <el-input placeholder="Twitter url" v-model="form.twitter"></el-input>
            
            <el-input placeholder="Facebook url" v-model="form.facebook"></el-input>
            
            <el-input placeholder="Instagram url" v-model="form.instagram"></el-input>
            
            <el-input placeholder="Email" v-model="form.email"></el-input>

            <el-button type="primary" @click="onSubmit">Create</el-button>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    mounted() {
        console.log(JSON.parse(window.localStorage.getItem('passportToken')).token);
    },
    data() {
        return {
            form: {
                twitter: '',
                facebook: '',
                instagram: '',
                email: ''
            }
        }
    },
    methods: {
        onSubmit() {
            let formData = this.form;

            axios.post('/api/social', {
                twitter: formData.twitter,
                facebook: formData.facebook,
                instagram: formData.instagram,
                email: formData.email
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
