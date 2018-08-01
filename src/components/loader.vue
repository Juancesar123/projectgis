<script>
export default {
    name:'loader',
    data (){
        return {
            isLoading: false,
            isFullPage: true
        }
    },
    beforeMount:function(){
        this.open()
    },
    methods:{
        open() {
            const loadingComponent = this.$loading.open({
                container: this.isFullPage ? null : this.$refs.element.$el
            })
            setTimeout(() => loadingComponent.close(), 1 * 1000)
        },
    }
}
</script>
