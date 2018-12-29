import tweepy
from creds import CREDS


class TweetBot:

    def __init__(self):
        auth = tweepy.OAuthHandler(CREDS['API_KEY'], CREDS['API_SECRET'])
        auth.set_access_token(CREDS['ACCESS_TOKEN'],
                              CREDS['ACCESS_TOKEN_SECRET'])
        self.api = tweepy.API(auth)

    def post(self, status):
        self.api.update_status(status)
