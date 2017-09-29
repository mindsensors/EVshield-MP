from EVShield import EVShield
from EVShieldDefines import *

'''
Argument options (in order):
SH_Motor_1, SH_Motor_2, SH_Motor_Both
SH_Direction_Forward, SH_Direction_Reverse
SH_Speed_Slow, SH_Speed_Medium, SH_Speed_Full, or any value between 0 and 100
'''

evshield = EVShield()

evshield.bank_a.motorRunUnlimited(SH_Motor_1, SH_Direction_Forward, SH_Speed_Medium)
