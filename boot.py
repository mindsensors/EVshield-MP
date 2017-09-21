# boot.py -- run on boot-up
# can run arbitrary Python, but best to keep it minimal

import pyb
'''
from EVShieldDefines import SH_Bank_A
pingEV = pyb.Timer(1)
pingEV.init(freq=3)
pingEV.callback(lambda _: pyb.I2C(1).is_ready(SH_Bank_A>>1))
#pingEV.callback(lambda _: pyb.I2C(1).send([], SH_Bank_A>>1))
'''
#from EVShieldSensors import AbsoluteIMU
#from EVShieldDefines import SH_BAS1
#a = AbsoluteIMU(SH_BAS1)

from EVShield import EVShield
evshield = EVShield()
from EVShieldSensors import NXTTouch
from EVShieldDefines import SH_BAS1
t = NXTTouch(evshield, SH_BAS1)
t.isPressed()

#pyb.main('main.py') # main script to run after this one
