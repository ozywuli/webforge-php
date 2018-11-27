<template>
    <div class="app">
        <navbar></navbar>
        <router-view></router-view>     
    </div>    
</template>

<script>
import Navbar from './presentational/Navbar';

export default {
    components: {
        Navbar
    },
}
</script>

