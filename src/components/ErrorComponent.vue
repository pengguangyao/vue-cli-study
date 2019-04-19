<template>
    <div>错误组件 {{num}}</div>
</template>

<script>
export default {
    name: 'ErrorComponent',
    props: ['id'],
    computed: {
        num: function(){
            console.log(this.id)
            return this.id || 100000;
        }
    },
    mounted(){
    
    }
}
</script>
