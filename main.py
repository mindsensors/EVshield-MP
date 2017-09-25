# main.py -- put your code here!
from EVShield import EVShield
from EVShieldSensors import NXTTouch
from EVShieldDefines import *

evshield = EVShield()
nxttouch = NXTTouch(evshield, SH_BAS2)

while not evshield.getButtonState(BTN_GO):
    if nxttouch.isPressed():
        evshield.bank_a.motorRunUnlimited(SH_Motor_1, SH_Direction_Forward, SH_Speed_Full)
    else:
        evshield.bank_a.motorStop(SH_Motor_1, SH_Next_Action_Float)

evshield.bank_a.motorStop(SH_Motor_1, SH_Next_Action_Float)
