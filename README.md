# Vulbase

漏洞文库合集 (全部 gitbook 化)

### 导航页面

![](./img/index.png)

### docker 运行

```
docker pull vultarget/vulbase:0.1
docker run -it -d -p 80:80 vultarget/vulbase:0.1
```

## 加入basic auth认证机制

默认密码 admin / 1q2w3e4r

自定义密码

```
docker run -it -d -e AUTH_PASS="yourpassword" -p 80:80 vultarget/vulbase:0.1
```
