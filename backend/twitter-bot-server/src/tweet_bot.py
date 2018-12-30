import tweepy
from creds import CREDS


class TweetBot:

    def __init__(self):
        auth = tweepy.OAuthHandler(CREDS['API_KEY'], CREDS['API_SECRET'])
        auth.set_access_token(CREDS['ACCESS_TOKEN'],
                              CREDS['ACCESS_TOKEN_SECRET'])
        self.api = tweepy.API(auth)

    def post(self, status):
        return self.api.update_status(status)

    def get_trends(self):
        washington = 2514815
        trends = self.api.trends_place(washington)[0]['trends']
        name_trends = [trend['name'] for trend in trends]
        just_hashtags = list(filter(lambda x: x[0] == '#', name_trends))
        hot_keys = ['trump', 'wall', 'politics', 'gov', 'probe']
        just_hashtags = list(filter(lambda x: any(
            [hot in x.lower() for hot in hot_keys]), just_hashtags))
        return just_hashtags
