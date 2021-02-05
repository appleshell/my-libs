# http

基于[`axios`](https://www.kancloud.cn/yunye/axios/234845)封装的移动端 http 请求方法。

#### 基础使用

```js
import { http } from 'auto-libs';

http.request({
  method: 'get',
  url: '/widget/jsapi/test',
  params: { id: 1 },
});

http.request({
  method: 'post',
  url: '/widget/jsapi/test',
  data: { id: 1 },
});
```

#### 指定请求方法

```js
import { http } from 'auto-libs';

http.get('/widget/jsapi/test', { params: { id: 1 } });

http.post('/widget/jsapi/test', { id: 1 });
```
