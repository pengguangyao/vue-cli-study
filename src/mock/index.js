import Mock from 'mockjs';
import {list} from './data';
Mock.mock('/api/data', (req, res) => {
    // console.log(req, res)
    return list;
})