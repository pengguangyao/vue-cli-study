import _ from 'lodash';
export default {
    namespaced: true,
    state: {
        a: 11,
        data: [],
        count: 0
    },
    mutations: {
        fetch(state, payload){
            console.log(payload);
            state.a++
        },
        changeData(state, payload){
            state.data = _.get(payload, 'data.dataList', []);
            state.count = _.get(payload, 'data.dataCount', 0);
        }
    },

    actions: {
        async fetch({commit, state}, payload){
            
            const response =  await fetch('/raykite-resource/chart/list/1/8').then(res => {
                return res.json();
            });
            
            commit('changeData', response)
        }
    }
}