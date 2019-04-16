import {appStore, router} from '../main';
// import axios from 'axios';

export const root =  process.env.NODE_ENV === 'development'?undefined:"/api"
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  console.log(`请求错误 ${response.status}: ${response.url}`, errortext);
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

function checkCode(data) {
  const emptyData = {
    code: data.code,
    msg: 'error',
    data: {
      count: 0,
      list: {},
    },
  };
  if (data.code === 0) {
    return data;
  } else if (data.code === 10001) {
    console.log('登陆失败');
    return data;
  } else if (data.code === 10002) {
    console.log('令牌无效');
    goOut();
    return emptyData;
  } else {
    return data;
  }
}

export default function request(url, options) {
  const reqUrl = root ? `${root}${url}` : url;
  const defaultOptions = {
    //表示跨域请求是可以带cookie (fetch跨域请求默认不会带cookie)
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        //一般用于表单提交
        // 'Content-Type': 'application/x-www-form-urlencoded', 
        ...newOptions.headers,
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        ...newOptions.headers,
      };
    }
  }
  return fetch(reqUrl, newOptions)
    .then(checkStatus)
    .then(response => {
      return response.json();
    })
    .then(checkCode)
    .catch(e => {
      const { dispatch } = appStore;
      const status = e.name;
      if (status === 401) {
        return;
      }
      if (status === 403) {
        // dispatch(router.push('/exception/403'));
        return;
      }
      if (status <= 504 && status >= 500) {
        // dispatch(router.push('/exception/500'));
        return;
      }
      if (status >= 404 && status < 422) {
        router.push('/exception/404');
      }
    });
}



//axios
// export default function request(url, options){
//   return axios.get(url).then(res => res.data)
// }
