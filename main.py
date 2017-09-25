# main.py -- put your code here!
from EVShield import EVShield
from EVShieldSensors import NXTLight
from EVShieldDefines import *

evshield = EVShield()
nxtlight = NXTLight(evshield, SH_BAS2)

while not evshield.getButtonState(BTN_GO):
    #print(nxtlight.readRaw())
    evshield.bank_a.motorRunUnlimited(SH_Motor_1, SH_Direction_Forward, int(nxtlight.readRaw()/2))

evshield.bank_a.motorStop(SH_Motor_1, SH_Next_Action_Float)
