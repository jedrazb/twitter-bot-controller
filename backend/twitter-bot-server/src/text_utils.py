punctuation = '.,!?:;%'

MAX_LENGTH = 280


def prettify(text):
    # links
    text = text.replace('https : / / t . co /', '')
    # hashtags
    text = text.replace('# ', '#')
    text = text.replace('@ ', '@')
    # times suffixes
    text = text.replace('a . m .', 'am')
    text = text.replace('p . m .', 'pm')
    # personal pronoun
    text = text.replace(' i ', 'I')
    # suffix
    text = text.replace(' \' ', '\'')
    # punctuation
    for punct in punctuation:
        text = text.replace(' ' + punct, punct)

    # special
    text = text.replace('u. s .', 'U.S.')
    text = text.replace('trump', 'Trump')
    text = text.replace('mr', 'Mr')
    text = text.replace(' @: ', '')

    add_hashtags(text, [])

    return text


def add_hashtags(text, hashtags):

    length = len(text)

    for hashtag in sorted(hashtags, key=lambda x: len(x)):
        if len(hashtag) + length + 1 <= MAX_LENGTH:
            text += ' ' + hashtag
            length += 1 + len(hashtag)

    return text
