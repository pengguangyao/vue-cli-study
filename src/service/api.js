import request from '@/utils/request';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3JvbGUiOiIyIiwidXNlcl9pZCI6ImZmZTllYmZjYTZiMTQzMzk4MWM0YjE1MDJiNzQyMWQ3IiwiZXhwIjoxNTU1NjYzMzIwLCJpYXQiOjE1NTU0OTA1MjB9.TNSuCQfdxRbLvgjj9lXApIWJ3Z7PoljDK3v9AAeR3G8'
//分页获取图表接口
export async function getChart(params) {
    return request(`/raykite-resource/chart/list/${params.page}/${params.limit}`)
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
