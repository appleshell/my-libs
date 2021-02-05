# httpConsole

基于[`axios`](https://www.kancloud.cn/yunye/axios/234845)封装的凹凸管理后台 http 请求方法。

#### 基础使用

```js
import { httpConsole } from 'auto-libs';

httpConsole.request({
  method: 'get',
  url: '/widget/jsapi/test',
  params: { id: 1 },
});

httpConsole.request({
  method: 'post',
  url: '/widget/jsapi/test',
  data: { id: 1 },
});
```

#### 指定请求方法

```js
import { httpConsole } from 'auto-libs';

httpConsole.get('/widget/jsapi/test', { params: { id: 1 } });

httpConsole.post('/widget/jsapi/test', { id: 1 });
```
