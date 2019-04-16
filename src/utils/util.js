import {root} from './request';
//比较2个对象，这里是包含关系，不是完全对等关系

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3JvbGUiOiIyIiwidXNlcl9pZCI6ImZmZTllYmZjYTZiMTQzMzk4MWM0YjE1MDJiNzQyMWQ3IiwiZXhwIjoxNTU1NDg5Mjg0LCJpYXQiOjE1NTUzMTY0ODR9.A7Q_hztsyDdkkZiXto0OVWvTKUnhCXV6Q2xVrA9jFrM'

export const equalObj = (a, b, c = []) => {
  let arr1 = Object.keys(a);
  let result = true;
  arr1.forEach(item => {
    if(!c.includes(item) && a[item] !== b[item]){
      result = false;
    }
  })
  return result;
}

export const fileUrl = root ? `${root}/file/tencent/upload-file/${token}` : `/file/tencent/upload-file/${token}`;

export const getEditData = arr => {
  let result = [];
  result = arr.map(item => {
    return {
      ...item,
      editable: false
    }
  });
  return result;
}