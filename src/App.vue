<template>
    <div class="layout">
        <div class="silder">
          <div class="silder-title">官网后台管理平台</div>
          <Menu :theme="theme" collspase accordion @on-select="changemenu" :active-name="selectName" :open-names="openName" ref="menu">
            <MenuItem name="/control">
               <Icon type="ios-paper" />
               控制中心
            </MenuItem>
            <Submenu name="success">
                <template slot="title">
                    <Icon type="ios-paper" />
                    成就
                </template>
                <MenuItem name="/success/production">核心产品</MenuItem>
                <MenuItem name="/success/solution">解决方案</MenuItem>
                <MenuItem name="/success/news">大事件</MenuItem>
            </Submenu>
          </Menu>
        </div>

        <div class="you">
            <div class="header">
              <Dropdown @on-click="loginout">
                  <span class="user">
                      <Icon type="ios-person"></Icon>
                      下拉菜单
                  </span>
                  <DropdownMenu slot="list" placement="top-start">
                      <DropdownItem name="login">退出登录</DropdownItem>
                  </DropdownMenu>
              </Dropdown>
            </div>
            <div class="content">
              <!-- 路由组件 -->
              <router-view></router-view>
            </div>
            <div class="foot">
              北京光启元科技有限公司
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        theme: 'dark',
        selectName: this.$store.state.global.path,
        openName: this.$store.state.global.path.slice(1).split('/')[1]?[this.$store.state.global.path.slice(1).split('/')[0]]:[],
      }
    },  

    methods: {
      changemenu: function(name){
        if(name.slice(1).split('/').length === 1){
          this.openName = [];
          this.$nextTick(()=> {
            this.$refs.menu.updateOpened();
          });
        }
        this.$router.push(`${name}`);
      },
      loginout: function(name){
        // console.log(name);
        this.$router.push(name);
      }
    },
    // watch: {
    //   $route : function(val, oldval){
    //     if(val.path.slice(1).split('/').length === 1 && this.$refs.menu){
    //       console.log(333)
    //       this.openName = [],
    //       this.$refs.menu.opened = false;
    //       this.$nextTick(()=> {
    //         this.$refs.menu.updateOpened();
    //       });
    //     }
    //   }
    // }
  }
</script>

<style lang="less">
  .layout {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .silder{
    height: 100%;
    background: #515a6e;
    float: left;
    .silder-title{
      height: 60px;
      color: white;
      text-align: center;
      line-height: 60px;
      font-size: 20px;
      background: rgb(24, 22, 22);
    }
    
  }
  .you{
    float: left;
    width: calc(~'100% - 240px');
    height: 100%;
    position: relative;
    .header{
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #eeeeee;
      text-align: right;
      padding: 0 20px;
      line-height: 60px;
    }
    .content{
      width: 100%;
      height: calc(~'100% - 120px');
      padding: 20px;
      box-sizing: border-box;
      background: #eeeeee;
    }
    .foot{
      width: 100%;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 16px;
      position: absolute;
      bottom: 0;
      color: rgba(0, 0, 0, 0.5);
    }
    .user{
      font-size: 16px;
      cursor: pointer;
    }
    .ivu-select-dropdown{
      margin: 0;
      .ivu-dropdown-item{
        font-size: 14px !important;
        padding: 0;
        line-height: 30px;
        text-align: center;
      }
    }
  }
</style>
