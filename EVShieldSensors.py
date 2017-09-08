from EVShieldDefines import *
from EVShieldCom import *
from EVShield import *

# Analog sensor
class EVShieldAGS():
    pass

class AbsoluteIMU(EVShieldI2C):
    def __init__(self, port, i2c_address=0x22):
        EVShieldI2C.__init__(self, i2c_address)
        if port not in [SH_BAS1, SH_BAS2, SH_BBS1, SH_BBS2]:
            raise ValueError("Invalid bank port!")
        bankAddress = SH_Bank_A if port in [SH_BAS1, SH_BAS2] else SH_Bank_B
        sensorMode = SH_S1_MODE if port in [SH_BAS1, SH_BBS1] else SH_S2_MODE
        EVShieldI2C(bankAddress).writeByte(sensorMode, SH_Type_I2C) 
    def readGyro(self):
        return {
            "gx": self.readInteger(0x53),
            "gy": self.readInteger(0x55),
            "gz": self.readInteger(0x57)
        }
    def readCompass(self):
        return self.readInteger(0x4B)
    def readAccelerometer(self):
        return {
            "tx": self.readByte(0x42),
            "ty": self.readByte(0x43),
            "tz": self.readByte(0x44),
            "ax": self.readInteger(0x45),
            "ay": self.readInteger(0x47),
            "az": self.readInteger(0x49)
        }
    def readMagneticField(self):
        return {
            "mx": self.readInteger(0x4D),
            "my": self.readInteger(0x4F),
            "mz": self.readInteger(0x51)
        }
    def beginCompassCalibration(self):
        self.issueCommand(ord('C'))
    def endCompassCalibration(self):
        self.issueCommand(ord('c'))

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
        return self.readByte(0x52)
    def setMode(self, newMode):
        self.writeByte(0x52, newMode)
    def readValue(self):
        return self.readInteger(0x54)

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
