# twitter-bot-controller

## Overview

A simple end-to-end project which:
- uses a trained LSTM model to generate Trump-like hilarious tweets
- uses a graph database to store the generated tweets
- includes a simple React app which allows the user to decide which tweets to publish
- uses a bot which posts the auto-generated tweets in a regular time intervals
- can be easily deployed to Heroku

Check the result on Twitter: [@moretrumpforyou](https://twitter.com/moretrumpforyou)

You can deploy this app completely for free (on [Heroku](https://heroku.com) and [GraphCool](https://www.graph.cool/)) and have your own trained bot.

## Archtecture

## LSTM Model

The model which was used for this project is [textgenrnn](https://github.com/minimaxir/textgenrnn) which is a Python 3 module on top of Keras/TensorFlow for creating char-rnns, with many cool features. You can play with textgenrnn package and train any text file with a GPU for free in [this Colaboratory Notebook](https://drive.google.com/file/d/1mMKGnVxirJnqDViH7BDJxFqWrsXlPSoK/view?usp=sharing). Follow [this article](https://minimaxir.com/2018/05/text-neural-networks/) for more info about how to use the notebook.

Once you train the model in the notebook simply download the `{model_name}_weights.hdf5`, `{model_name}_vocab.json` and `{model_name}_config.json` and update the file paths in the [generate.py](https://github.com/jedrazb/twitter-bot-controller/blob/master/backend/twitter-bot-server/src/generate.py)

## GraphQL DB
For the GraphQL framework I chose [GraphCool](https://www.graph.cool/). It offers production-ready hosted solution, which means you don't need to worry about setting DB up as it works out of the box, and what is most important you can have it hosted for free (with 250 MB limit).

The only thing to do is to define the [model schemas](https://github.com/jedrazb/twitter-bot-controller/blob/master/backend/twitter-bot-db/types.graphql) either using [GraphCool CLI](https://www.graph.cool/docs/reference/graphcool-cli/overview-zboghez5go/) or using web-interface. 

## React app

Simple React frontend created using [create-react-app](https://github.com/facebook/create-react-app)

## Twitter bot

Simple python script which periodically posts accepted content on twitter. I used [Tweepy](http://www.tweepy.org/) as Twitter API wrapper. Everything can be found in the official docs.

## Deployment (if you want to have your own bot)

You can easily deploy the twitter bot script and React app on Heroku.

### React app
Create new app on Heroku. Select a free dyno and add the following buildpacks to the app:
- https://github.com/timanovsky/subdir-heroku-buildpack
- https://github.com/mars/create-react-app-buildpack.git

And set following config (env) vars:
- `PROJECT_PATH`: `frontend/twitter-bot-controller`

### Twitter bot
Add those buildpacks:
- https://github.com/timanovsky/subdir-heroku-buildpack
- heroku/python
And add those config vars:
- `PROJECT_PATH`: `backend/twitter-bot-server`
- `ACCESS_TOKEN`, `ACCESS_TOKEN_SECRET`, `API_KEY` and `API_SECRET` which are Twitter API credentials
- `DB_ENDPOINT` your GraphQL endpoint
