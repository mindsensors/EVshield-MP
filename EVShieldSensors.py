from EVShieldDefines import *
from EVShieldCom import *
from EVShield import *

# Analog sensor
class EVShieldAGS():
    pass

class AbsoluteIMU():
    pass

class AngleSensor(EVShieldI2C):
    def __init__(self, i2c_address=0x30):
        EVShieldI2C.__init__(self, i2c_address)
    def getAngle(self):
        return self.readLong(0x42)
    def getRawReading(self):
        return self.readLong(0x46)
    def reset(self):
        self.writeByte(0x41, ord('r'))

class DISTNx(EVShieldI2C):
    def __init__(self, i2c_address=0x02):
        EVShieldI2C.__init__(self, i2c_address)
    def energize(self):
        self.issueCommand(ord('E'))
    def deEnergize(self):
        self.issueCommand(ord('D'))
    def getDist(self):
        return self.readInteger(0x42)
    def getVolt(self):
        return self.readInteger(0x44)
    def getType(self):
        return self.readByte(0x50)

class EV3Color(EVShieldUART):
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp)
        self.setType(SH_Type_EV3)
    def getVal(self):
        return self.readValue()

class EV3Gyro(EVShieldUART):
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp)
        self.setType(SH_Type_EV3)
        self.ref = 0
    def getAngle(self):
        return self.readValue()
    def getRegAngle(self):
        return self.readValue() - self.ref
    def setRef(self):
        self.ref = self.readValue()

class EV3Infrared(EVShieldUART):
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp)
        self.setType(SH_Type_EV3)
    def readProximity(self):
        return self.readValue()
    def readChannelHeading(self, channel):
        if channel not in range(4): return -1
        return self.readLocationByte(0x81 + channel*2)
    def readChannelHeading(self, channel):
        if channel not in range(4): return -1
        return self.readLocationByte(0x82 + channel*2)
    def readChannelHeading(self, channel):
        if channel not in range(4): return -1
        return self.readLocationByte(0x82 + channel)

class EV3SensorMux(EVShieldI2C):
    def __init__(self, i2c_address=0x32):
        EVShieldI2C.__init__(self, i2c_address)
    def getMode(self):
        pass
    def setMode(self, newMode):
        pass
    def readValue(self):
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

class EV3Ultrasonic(EVShieldUART):
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp)
        self.setType(SH_Type_EV3)
    def getDist(self):
        return self.readValue()/10
    def detect(self):
        return self.readValue()

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
