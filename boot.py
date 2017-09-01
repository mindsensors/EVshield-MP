# boot.py -- run on boot-up
# can run arbitrary Python, but best to keep it minimal

import pyb

pyb.main('main.py') # main script to run after this one
