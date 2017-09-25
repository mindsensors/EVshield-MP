# main.py -- put your code here!
from EVShield import EVShield
from EVShieldSensors import EV3Touch
from EVShieldDefines import *

evshield = EVShield()
ev3touch = EV3Touch(evshield, SH_BAS1)

while not evshield.getButtonState(BTN_GO):
    if ev3touch.isPressed():
        evshield.bank_a.motorRunUnlimited(SH_Motor_1, SH_Direction_Forward, SH_Speed_Full)
    else:
        evshield.bank_a.motorStop(SH_Motor_1, SH_Next_Action_Float)

evshield.bank_a.motorStop(SH_Motor_1, SH_Next_Action_Float)
