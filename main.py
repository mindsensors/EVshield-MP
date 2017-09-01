# main.py -- put your code here!
from EVShield import *

evshield = EVShield()
evshield.bank_a.motorRunRotations(SH_Motor_1,
         SH_Direction_Reverse,
         SH_Speed_Medium,
         2,
         SH_Completion_Wait_For,
         SH_Next_Action_BrakeHold);
