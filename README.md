# 插件的安装

## npm
```
npm install fromValid
```

## 引入插件
```
import formValid from './lib/form_valid'
createApp(App).use(formValid).mount('#app')
```

## 基本用法
```
<form-valid :min="0" type="number" @login="login"></form-valid>

```

## API

| 参数 | 说明 | 类型 | 默认值 | 必填 |
| -- | -- | -- | -- | -- |
| min | type为number是有效，最小值 | Number | - | 否 |
| type | 密码输入框类型 | String | 'string' | 否 |
| login | 登录方法 | Function | - | 是 |




