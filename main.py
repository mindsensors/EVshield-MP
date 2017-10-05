from EVShieldSensors import AbsoluteIMU
from EVShield import EVShield
evshield = EVShield()

absimu_BAS1 = AbsoluteIMU(SH_BAS1)


while True:
  evshield.centerLedSetRGB(absimu_BAS1.readTilt()['x'], absimu_BAS1.readTilt()['y'], absimu_BAS1.readTilt()['z'])
