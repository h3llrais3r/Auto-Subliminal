# coding=utf-8

import time

from autosubliminal.core.runner import Runner


class MyRunner(Runner):
    def run(self):
        pass


def test_runner(mocker):
    runner = None
    try:  # Use try/finally block to make sure that the thread is stopped
        runner_mock = mocker.patch.object(MyRunner, 'run')
        runner = MyRunner('MyRunner')
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert runner_mock.called
    finally:
        if runner:
            runner.stop()
