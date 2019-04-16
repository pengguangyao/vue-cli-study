import request from '@/utils/request';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3JvbGUiOiIyIiwidXNlcl9pZCI6ImZmZTllYmZjYTZiMTQzMzk4MWM0YjE1MDJiNzQyMWQ3IiwiZXhwIjoxNTU1NDg5Mjg0LCJpYXQiOjE1NTUzMTY0ODR9.A7Q_hztsyDdkkZiXto0OVWvTKUnhCXV6Q2xVrA9jFrM'
//分页获取图表接口
export async function getChart(params) {
    return request(`/raykite-resource/chart/list/1/8`)
    // return request(`/api/data`)
}
//编辑图表
export async function editChart(params) {
    return request(`/raykite-resource/chart/${token}`, {
        method: 'POST',
        body: params,
    })
}
//增加图表
export async function addChart(params) {
    return request(`/raykite-resource/chart/${token}`, {
        method: 'PUT',
        body: params,
    })
}
//删除图表
export async function delChart(params) {
    return request(`/raykite-resource/chart/${token}`, {
        method: 'DELETE',
        body: params,
    })
}
