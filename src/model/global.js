export default {
    namespaced: true,

    state: {
        path: '',
    },

    //同步处理
    mutations: {
        changePath(state, payload){
            state.path = payload.path;
        }
    },

    //异步处理
    actions: {
        async fetch({commit, state}, payload){
            console.log(state, payload)
        }
    }
}