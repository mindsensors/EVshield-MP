# main.py -- put your code here!
from EVShield import EVShield
from EVShieldSensors import EV3Infrared
from EVShieldDefines import *
import time

evshield = EVShield()
ev3ir = EV3Infrared(evshield, SH_BAS2)

while not evshield.getButtonState(BTN_GO):
    print(ev3ir.readProximity())
    time.sleep(0.1)
