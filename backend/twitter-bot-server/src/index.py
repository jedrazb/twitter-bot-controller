from gql.transport.requests import RequestsHTTPTransport
from gql import Client
from twisted.internet import task, reactor

from generate import Generator
from query import create_post
from query import get_accepted_post
from tweet_bot import TweetBot
from creds import DB_ENDPOINT


class Server:

    def __init__(self):
        _transport = RequestsHTTPTransport(
            url=DB_ENDPOINT,
            use_json=True,
        )
        self.client = Client(
            transport=_transport,
            fetch_schema_from_transport=True,
        )
        self.generator = Generator()
        self.tweet_bot = TweetBot()

    def create_routine(self):
        content = self.generator.generate()
        variables = {'content': content}
        print(content)
        self.client.execute(create_post, variables)

    def post_routine(self):
        response = self.client.execute(get_accepted_post)
        posts = response['allPosts']

        if len(posts) == 0:
            return

        post_to_poblish = posts[0]
        content = post_to_poblish['content']
        print(content)
        self.tweet_bot.post(content)

    def start(self):
        generate_timeout = 180.0
        generate_routine = task.LoopingCall(self.create_routine)
        generate_routine.start(generate_timeout)

        # post_timeout = 500.0
        # post_routine = task.LoopingCall(self.post_routine)

        reactor.run()


Server().post_routine()
