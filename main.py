# main.py -- put your code here!
from EVShield import EVShield
from EVShieldSensors import NXTLight
from EVShieldDefines import *
import time

evshield = EVShield()
nxtlight = NXTLight(evshield, SH_BAS2)

while not evshield.getButtonState(BTN_GO):
    nxtlight.setReflected()
    time.sleep(0.2)
    nxtlight.setAmbient()
    time.sleep(0.2)
