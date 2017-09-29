from EVShieldSensors import AbsoluteIMU
a = AbsoluteIMU(SH_BBS1)
print(a.readTilt())
print(a.readAccelerometer())
print(a.readCompass())
print(a.readMagneticField())
print(a.readGyro())
