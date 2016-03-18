import abc


class BaseNotifier(object):
    """
    Base class for all notifiers.
    """
    __metaclass__ = abc.ABCMeta

    def __init__(self):
        self.application = "Auto-Subliminal"
        self.title = "Subtitle download"
        self.application_title = self.application + ": " + self.title
        self.test_message = "Test notification from " + self.application

    @abc.abstractproperty
    def log(self):
        pass

    @abc.abstractproperty
    def name(self):
        pass

    @abc.abstractproperty
    def enabled(self):
        pass

    def notify_download(self, video, subtitle, language, provider):
        # Only notify when enabled
        if self.enabled:
            self.log.debug("Sending a %s notification" % self.name)
            message = "Subtitle: %s \n Language: %s \n Provider: %s" % (subtitle, language, provider)
            return self._send_message(message)
        else:
            return False

    def test(self):
        self.log.debug("Testing a %s notification" % self.name)
        return self._send_message(self.test_message)

    @abc.abstractmethod
    def _send_message(self, message):
        pass
