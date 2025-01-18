import xml.etree.ElementTree as ET
import requests

# 定义函数来解析sitemap.xml文件并获取所有URL
def parse_sitemap(file_path):
    # 解析XML文件
    tree = ET.parse(file_path)
    root = tree.getroot()
    
    # 存储所有URL和最后修改日期的列表
    urls = []
    
    # 遍历每个URL元素
    for url in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
        loc = url.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc').text
        lastmod = url.find('{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod').text
        urls.append((loc, lastmod))
    
    return urls

# 定义函数来获取最新的N个URL
def get_latest_urls(urls, n=20):
    # 按照日期排序，最近的在前面
    sorted_urls = sorted(urls, key=lambda x: x[1], reverse=True)
    # 只取前N个URL
    return [url[0] for url in sorted_urls[:n]]

# 定义函数来提交URL到IndexNow
def submit_to_indexnow(host, key, key_location, url_list):
    # 创建请求数据
    data = {
        "host": host,
        "key": key,
        "keyLocation": key_location,
        "urlList": url_list
    }
    
    # 发送POST请求到IndexNow API
    response = requests.post("https://api.indexnow.org/indexnow", json=data)
    
    # 输出请求结果
    if response.status_code == 200:
        print("Successfully submitted URLs to IndexNow.")
    else:
        print("Failed to submit URLs:", response.status_code, response.text)

# 主程序
if __name__ == "__main__":
    # 定义sitemap.xml文件路径
    sitemap_file = "sitemap.xml"
    
    # 解析sitemap.xml并获取所有URL
    urls = parse_sitemap(sitemap_file)
    
    # 获取最新的20个URL
    latest_urls = get_latest_urls(urls, n=20)
    
    # 定义IndexNow API相关信息
    host = "4rozen.github.io"
    key = "a71f352a4d724bf586e3e79ab60fd804"
    key_location = f"https://{host}/{key}.txt"  # 拼接keyLocation
    
    # 提交最新的URL到IndexNow
    submit_to_indexnow(host, key, key_location, latest_urls)
