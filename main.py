from EVShield import EVShield
evshield = EVShield()
import time


evshield.bank_a.motorRunUnlimited(SH_Motor_1, SH_Direction_Reverse, 40)
evshield.bank_a.motorResetEncoder(SH_Motor_1)
evshield.ledSetRGB(255, 0, 0)
while not evshield.getButtonState(BTN_GO):
  print(evshield.bank_a.motorGetEncoderPosition(SH_Motor_1))
  time.sleep(1)
evshield.bank_a.motorRunUnlimited(SH_Motor_1, SH_Direction_Forward, 0)
evshield.ledSetRGB(0, 0, 153)
