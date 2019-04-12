<template>
    <div>
        {{ll}}
        这是用户中心 父组件{{a}}
        <Button @click="add(1)">增加</Button>
        <Button @click="childmethod">父组件调用子组件的方法</Button>
        <hr/>
        子组件
        <NotFound :num="a" @addNum="add" :del="minus" ref="child">
            <template v-slot:default="propss">
                {{propss.age}}
            </template>
            
        </NotFound>
        
    </div>
</template>

<script>
    import NotFound from './NotFound.vue'
    import _ from 'lodash'
    export default {
        components: {
            NotFound,
        },
        data(){
            return {
                a: 100,
            }
        },
        methods: {
            add: function(n){
                this.a+=n;
                this.ll++;
            },
            minus: function(n){
                this.a-=n;
            },
            childmethod: function(){
                this.$refs.child.add(5);
            }
        },
        computed: {
            ll: {
                get: function(){
                    return this.a*10
                },
                set: function(v){
                    this.a = v-1
                }
            }
        },
        watch: {
            a: function(val, oldVal){
                // console.log(val, oldVal)
            }
        },
        beforeCreate(){
            console.log('ff + beforeCreate')
        },
        created(){
            console.log('ff + created')
        },
        beforeMount(){
            console.log('ff + beforeMount')
        },
        mounted(){
            console.log('ff + mounted');
            const obj1={
                id: 1,
                // data: [1,2,3],
                // name: '123'
            }
            const obj2={
                id: 1,
                // data: [1,2,3],
                // name: '123'
            }
            function eeexport(a,b){
                if(a[name] === b[name]) return false;
                return true;
            }
            // console.log(_.isEqualWith(obj1,obj2, eeexport))
        },  
        beforeUpdate(){
            console.log('ff + beforeUpdate')
        },
        updated(){
            console.log('ff + updated')
        },
        activated(){
            console.log('ff + activated')
        },
        deactivated(){
            console.log('ff + deactivated')
        },
        beforeDestroy(){
            console.log('ff + beforeDestroy')
        },
        destroyed(){
            console.log('ff + destroyed')
        }
    }
</script>
