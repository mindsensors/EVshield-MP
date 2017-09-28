from EVShield import EVShield
evshield = EVShield()
from EVShieldSensors import NXTTouch

nxttouchBAS1 = NXTTouch(evshield, SH_BAS1)


while True:
  if nxttouchBAS1.isPressed():
    evshield.ledSetRGB(255, 0, 0)
  else:
    evshield.ledSetRGB(0, 0, 153)
