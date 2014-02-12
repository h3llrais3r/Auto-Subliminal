from collections import namedtuple


class Choices(object):
    """
    Choices. Currently limited to ENABLED or DISABLED.
    """
    Choice = namedtuple('Choice', ['boolvalue', 'description'])

    DISABLED = Choice('False', 'Disabled')
    ENABLED = Choice('True', 'Enabled')

    def list(self):
        return [Choices.DISABLED, Choices.ENABLED]
