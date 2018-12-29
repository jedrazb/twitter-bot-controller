import os
from textgenrnn import textgenrnn

from text_prettier import prettify


class Generator:

    def __init__(self):
        dir_path = os.path.dirname(os.path.realpath(__file__))
        self.textgen = textgenrnn(weights_path=dir_path+'/bible_weights.hdf5',
                                  vocab_path=dir_path+'/bible_vocab.json',
                                  config_path=dir_path+'/bible_config.json')

    def generate(self):
        temperature = [0.5]
        text_sample = self.textgen.generate(
            max_gen_length=60,
            temperature=temperature,
            return_as_list=True)[0]

        return prettify(text_sample)
