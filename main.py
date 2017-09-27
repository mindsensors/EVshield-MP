from EVShield import EVShield
evshield = EVShield()
import time


evshield.bank_a.motorRunRotations(
        SH_Motor_1,
        SH_Direction_Reverse,
        SH_Speed_Medium,
        2,
        SH_Completion_Wait_For,
        SH_Next_Action_Brake);

evshield.bank_a.motorRunRotations(
        SH_Motor_1,
        SH_Direction_Forward,
        SH_Speed_Medium,
        2,
        SH_Completion_Wait_For,
        SH_Next_Action_Brake);
