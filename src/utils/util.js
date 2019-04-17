import {root} from './request';
//比较2个对象，这里是包含关系，不是完全对等关系

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX3JvbGUiOiIyIiwidXNlcl9pZCI6ImZmZTllYmZjYTZiMTQzMzk4MWM0YjE1MDJiNzQyMWQ3IiwiZXhwIjoxNTU1NjYzMzIwLCJpYXQiOjE1NTU0OTA1MjB9.TNSuCQfdxRbLvgjj9lXApIWJ3Z7PoljDK3v9AAeR3G8'

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

export const exampleData = [
  {
  chartId: "42e52bc9642e49efb87586982e561aa5",
  chartName: "发的发的",
  chartTypeId: "03bf212a0e0c40d88f00eedb1b8d7f93",
  previewUrl: "https://files.raykite.com/raydata/test/20190416/image/7d757b3424b3437088d411346c6a4ede.png",
  chartSecondType: "2003",
  maxCol: 9,
  maxRow: 9,
  maxData: 9,
  status: 10002
  },
  {
  chartId: "96a56849ae1841de8411c621ba5e8c3f",
  chartName: "鼎折覆餗",
  chartTypeId: "9b527b304bb74a139ad1b6e054ce1c18",
  previewUrl: "https://files.raykite.com/raydata/test/20190416/image/3cc96360396b4654a1273d4882092c00.png",
  chartSecondType: "2009",
  maxCol: 5,
  maxRow: 5,
  maxData: 5,
  status: 10002
  },
  {
  chartId: "6276b90131d8452e9177d49b3893ba87",
  chartName: "test21213",
  chartTypeId: "aa689260951a48aeafae6a644082b77a",
  previewUrl: "https://files.raykite.com/raydata/test/20190416/image/76ee13375f8a4cfe941b78de409c8b15.png",
  chartSecondType: "2001",
  maxCol: 7,
  maxRow: 7,
  maxData: 7,
  status: 10002
  },
  {
  chartId: "1eb00ab3c22a4b328a896e0c7678bec4",
  chartName: "横向柱状图",
  chartTypeId: "aa689260951a48aeafae6a644082b77a",
  previewUrl: "https://files.raykite.com/raydata/test/20190228/image/def36846358740c8a2eeabc1074c1a75.png",
  chartSecondType: "2001",
  maxCol: 6,
  maxRow: 1,
  maxData: 10,
  status: 10001
  },
  {
  chartId: "6890af787f664c05b042f2bf7a26a6f2",
  chartName: "环形图",
  chartTypeId: "9b527b304bb74a139ad1b6e054ce1c18",
  previewUrl: "https://files.raykite.com/raydata/test/20190228/image/1848c6bbc0254ff08a1a15eefc0452d5.png",
  chartSecondType: "2002",
  maxCol: 6,
  maxRow: 1,
  maxData: 10,
  status: 10001
  },
  {
  chartId: "ad97561a2fc646b49e03d53b65d6b2a1",
  chartName: "线图",
  chartTypeId: "03bf212a0e0c40d88f00eedb1b8d7f93",
  previewUrl: "https://files.raykite.com/raydata/test/20190228/image/c45de8ec58dd4c278e44be6239d1bdce.png",
  chartSecondType: "2003",
  maxCol: 6,
  maxRow: 2,
  maxData: 10,
  status: 10001
  },
  {
  chartId: "62bee994a39f4e569066afe59b50c090",
  chartName: "纵向柱状图",
  chartTypeId: "aa689260951a48aeafae6a644082b77a",
  previewUrl: "https://files.raykite.com/raydata/test/20190228/image/79878fce60a6469982ca274675226987.png",
  chartSecondType: "2009",
  maxCol: 7,
  maxRow: 1,
  maxData: 10,
  status: 10001
  }
]