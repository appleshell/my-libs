---
title: Search
---

# Search

处理页面 URL 参数方法

### Search.parse()

获取当前页面地址 search 的 map

<code src="./parse.tsx" />

### Search.toString()

获取当前网址 search 内容的 string

<code src="./toString.tsx" />

### Search.map2string()

map 格式转 string 格式

<code src="./map2string.tsx" />

### Search.string2map()

string 格式转换 map 格式

<code src="./string2map.tsx" />

### Search.get(key)

获取当前页面链接 search 中的某个 key

<code src="./get.tsx" />

### Search.getDefault(key, defaultVal)

给当前页面链接 search 中的某个 key，设置默认值。当获取 key 的值为`undefined`时，返回默认值

<code src="./getDetault.tsx" />

### Search.set(key, val)

设置某个值到当前页面链接的 search 中

<code src="./set.tsx" />

### Search.define(key, val)

当 key 不存在时，设置某个值到当前页面链接的 search 中。如果存在，不做任何处理

<code src="./define.tsx" />

### Search.remove(key)

删除当前页面链接的 search 中的某个 key

<code src="./remove.tsx" />

### Search.clear()

删除当前页面链接的 search

<code src="./clear.tsx" />

### Search.exist(key)

判断当前页面链接的 search 中是否存在指定的 key

<code src="./exist.tsx" />

### Search.is(key, val)

比较当前页面链接 search 中指定 key 的值与目标值是否相等

<code src="./is.tsx" />

### API

| 属性       | 参数                       | 描述                                                                        | 返回值                     |
| ---------- | -------------------------- | --------------------------------------------------------------------------- | -------------------------- |
| parse      | 无                         | 解析当前页面链接的 search 为 map                                            | { key: value }             |
| toString   | 无                         | 解析当前页面链接的 search 为字符串                                          | 'key1=val1&key2=val2'      |
| map2string | { key1: val1, key2: val2 } | 将 map 转换为字符串                                                         | 'key1=val1&key2=val2'      |
| string2map | 'key1=val1&key2=val2'      | 将字符串转换为 map                                                          | { key1: val1, key2: val2 } |
| get        | key                        | 获取当前页面链接 search 中的指定参数值                                      | value                      |
| getDefault | (key, defaultValue)        | 给当前页面链接 search 中的指定参数设置默认值                                | `value ?? defaultValue`    |
| set        | (key, value)               | 给当前页面链接 search 设置指定的参数                                        | 无                         |
| define     | (key, value)               | 给当前页面链接 search 设置指定的参数，如果 key 在 search 中存在，则不做处理 | 无                         |
| remove     | (key)                      | 删除当前页面链接 search 设置指定的参数                                      | 无                         |
| clear      | 无                         | 删除当前页面链接的 search                                                   | 无                         |
| exist      | (key)                      | 判断当前页面链接的 search 中是否存在指定的参数 key                          | 无                         |
| is         | (key, value)               | 比较当前页面链接 search 中指定参数 key 的值与 value 是否相等                | 无                         |
