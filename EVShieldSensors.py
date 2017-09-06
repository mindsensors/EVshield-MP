from EVShieldDefines import *
from EVShieldCom import *
from EVShield import *

# Analog sensor
class EVShieldAGS():
    pass

class AbsoluteIMU():
    pass

class AngleSensor():
    pass

class DISTNx():
    pass

class EV3Color():
    pass

class EV3Gyro():
    pass

class EV3Infrared():
    pass

class EV3SensorMux():
    pass

class EV3Touch(EVShieldUART):
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp)
        self.setType(SH_Type_EV3_SWITCH)
    def isPressed(self):
        return self.readLocationByte(0x83) == 1
    def getBumpCount(self):
        return self.readLocationByte(0x84)
    def resetBumpCount(self):
        return self.writeLocation(0x84, 0)

class EV3Ultrasonic():
    pass

class LightSensorArray():
    pass

class LineLeader():
    pass

class MagicWand():
    pass

class NXTCam():
    pass

class NXTColor():
    pass

class NXTCurrentMeter():
    pass

class NXTLight():
    pass

class NXTMMX():
    pass

class NXTServo():
    pass

class NXTTouch():
    pass

class NXTVoltMeter():
    pass

class NumericPad():
    pass

class PFMate():
    pass

class PSPNx():
    pass

class PiLight():
    pass

class RTC():
    pass

class SumoEyes():
    pass
