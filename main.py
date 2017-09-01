# main.py -- put your code here!
from EVShield import *

ev = EVShield()
ev.bank_a.motorRunRotations(which_motors        = SH_Motor_1,
                            direction           = SH_Direction_Reverse,
                            speed               = SH_Speed_Medium,
                            rotations           = 2,
                            wait_for_completion = SH_Completion_Wait_For,
                            next_action         = SH_Next_Action_BrakeHold)
