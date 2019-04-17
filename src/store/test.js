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