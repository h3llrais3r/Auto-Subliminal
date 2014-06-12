import time
import threading
import os
import traceback


class Scheduler:
    def __init__(self, process, interval, runnow, name):
        self.lastrun = time.time()
        self.process = process
        self.name = name
        self.interval = interval
        self.thread = threading.Thread(None, self.run_process, self.name)
        self.stop = False
        if runnow:
            try:
                self.process.run()
                self.runnow = False
            except:
                print traceback.format_exc()
                os._exit(1)

    def run_process(self):
        while True:
            currentime = time.time()
            if currentime - self.lastrun > self.interval:
                try:
                    if self.process.run():
                        self.lastrun = currentime
                except:
                    print traceback.format_exc()
                    os._exit(1)

            if self.runnow:
                try:
                    if self.process.run():
                        self.lastrun = currentime
                        self.runnow = False
                except:
                    print traceback.format_exc()
                    os._exit(1)
            if self.stop:
                break
            time.sleep(1)
