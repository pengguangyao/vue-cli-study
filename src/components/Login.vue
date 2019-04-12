<template>
    <div>
        <p>
        <Input v-model="user" placeholder="请输入用户名" style="width: 300px" />{{user}}
        </p>
        <p>
            <Input v-model="pwd" placeholder="请输入密码" style="width: 300px" />{{pwd}}
        </p>
        <template>
            <Button @click="submit">登录</Button>
        </template>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                user: '',
                pwd: '',
            }
        },
        methods: {
            submit: function(){
                if(this.user === 'admin' && this.pwd === '666'){
                    this.$router.push('/base');
                }
            }
        }
    }
</script>
