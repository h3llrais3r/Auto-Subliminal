# coding=utf-8
import time

from autosubliminal.core.runner import Runner


class TestRunner(Runner):
    def run(self):
        pass


def test_runner(mocker):
    # Use try/finally block to make sure that the thread is stopped
    try:
        test_runner_mock = mocker.patch.object(TestRunner, 'run')
        runner = TestRunner('TestRunner')
        time.sleep(2)  # Sleep to be sure that the run has been executed at least once
        assert test_runner_mock.called
    finally:
        runner.stop()
