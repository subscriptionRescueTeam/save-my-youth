import requests
import json


# /ApplyhomeInfoDetailSvc/v1/getUrbtyOfctlLttotPblancDetail
# url 입력
url = 'http://api.odcloud.kr/api/ApplyhomeInfoDetailSvc/v1/getAPTLttotPblancDetail?serviceKey=VFGlkBuLlP0y2dFadtiZFA3RLtQ3AEH0sVNeeHLMOiJsK%2BMd3%2B4NEN3S1z78M9uBl7OG3yAmA3ZRnAziezf43Q%3D%3D'
queryParams = {}
# url 불러오기
response = requests.get(url)

contents = json.loads(response.text)