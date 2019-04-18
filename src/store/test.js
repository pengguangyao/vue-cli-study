import _ from 'lodash';
import { getChart, editChart, addChart, delChart } from '@/service/api';
export default {
    namespaced: true,
    state: {
        a: 11,
        data: [],
        count: 0,
    },
    mutations: {
        changeData(state, payload){
            state.data = _.get(payload, 'data.dataList', []);
            state.count = _.get(payload, 'data.dataCount', 0);
        },
        editData(state, payload){
            state.data = state.data.map(item=> {
                if(item.chartId === payload.chartId){
                    return payload;
                }
                return item;
            })
        }
    },
    actions: {
        async fetch({commit, state}, payload){
            const response =  await getChart(payload);
            commit('changeData', response)
            return response;
        },
        async edit({commit, state}, {payload}){
            const response = await editChart(payload);
            if(response.code === 0){
                commit('editData', payload)
            }
            return response;
        },
        async add({commit, state}, {payload}){
            const response = await addChart(payload);
            return response;
        },
        async del({commit, state}, {payload}){
            const response = await delChart(payload);
            return response;
        },
    }
}