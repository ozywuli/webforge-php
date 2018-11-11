let id = {
    computed: {
        id() {
            return this.$route.params.id;
        }
    }
}

export default id;