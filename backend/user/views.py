from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from dj_rest_auth.registration.views import SocialLoginView
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
import environ
import os


env = environ.Env(
    DEBUG=(bool, False)
)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

class GoogleLogin(SocialLoginView):
    authentication_classes = [] # disable authentication
    adapter_class = GoogleOAuth2Adapter
    callback_url = env('CALLBACK_URL')
    client_class = OAuth2Client