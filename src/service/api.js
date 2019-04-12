import request from '@/utils/request';
//分页获取图表接口
export async function getChart(params) {
    return request(`/raykite-resource/chart/list/1/8`)
}