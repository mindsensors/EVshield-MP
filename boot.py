# boot.py -- run on boot-up
# can run arbitrary Python, but best to keep it minimal

import pyb

from EVShieldDefines import SH_Bank_A
pingEV = pyb.Timer(1)
pingEV.init(freq=3)
pingEV.callback(lambda _: pyb.I2C(1).is_ready(SH_Bank_A>>1))

pyb.main('main.py') # main script to run after this one
