<template>
    <div>
        未找到b:{{b}} num:{{num}} c:{{c}}
        <Button @click="add(i)">增加</Button>
        <Button @click="$emit('addNum',2)">都增加</Button>
        <Button @click="del(2)">减少</Button>
        
        <slot v-bind="obj">
            {{obj.name}}
        </slot>
        
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    props: {
        num: {
            type: Number,
            default: 666,
        },
        del: {
            type: Function,
            default: ()=>{},
        },
    },
    data(){
        return {
            b: this.num,
            i: 1,
            obj: {
                name: 'xaioepm', 
                age: 22,
            }
        }
    },
    computed: {
        c: function(){
            return this.num;
        }
    },
    methods: {
        add: function(n){
            this.b+=n;
            this.i++;
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    activated(){
        console.log('activated')
    },
    deactivated(){
        console.log('deactivated')
    },
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    }
}
</script>

