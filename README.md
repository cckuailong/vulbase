# Vulbase

漏洞文库合集 (全部 gitbook 化)

- P.S. Peiqi文库的图片已本地化，目前图片可正常访问

### 导航页面

![](./img/index.png)

### docker 运行

```
docker pull vultarget/vulbase:0.3
docker run -it -d -p 80:80 vultarget/vulbase:0.3
```

## 加入basic auth认证机制

默认密码 admin / 1q2w3e4r

自定义密码

```
docker run -it -d -e AUTH_PASS="yourpassword" -p 80:80 vultarget/vulbase:0.3
```

## ChangeLog

### 2021.9.4

- 加入wgpsec wiki
- peiqi文库的图片本地化