### 청년을 구해줘 백엔드

#### Quick Start

```
1. 해당 폴더로 이동
cd backend
2. 가상환경 만들기 virtualenv
virtualenv venv
source venv/bin/activate
3. 관련 라이브러리 install
pip install -r requirements.txt
4. DB 마이그레이션
python manage.py makemigrations
python manage.py migrate
5. admin 계정생성
python manage.py createsuperuser
6. 서버 실행
python manage.py runserver
```