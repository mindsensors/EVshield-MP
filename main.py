from EVShieldSensors import AbsoluteIMU
a = AbsoluteIMU(SH_BBS1)
while True:
    print(a.readTilt())
