from EVShieldDefines import *
from EVShieldCom import *
from EVShield import *

class AbsoluteIMU(EVShieldI2C):
    def __init__(self, port, i2c_address=0x22):
        EVShieldI2C.__init__(self, i2c_address)
        if port not in [SH_BAS1, SH_BAS2, SH_BBS1, SH_BBS2]:
            raise ValueError("Invalid bank port!")
        bankAddress = SH_Bank_A if port in [SH_BAS1, SH_BAS2] else SH_Bank_B
        sensorMode = SH_S1_MODE if port in [SH_BAS1, SH_BBS1] else SH_S2_MODE
        EVShieldI2C(bankAddress).writeByte(sensorMode, SH_Type_I2C) 
    def readTilt(self):
        return {"x": self.readByte(0x42),
                "y": self.readByte(0x43),
                "z": self.readByte(0x44)}
    def readAccelerometer(self):
        return {"x": self.readInteger(0x45),
                "y": self.readInteger(0x47),
                "z": self.readInteger(0x49)}
    def readCompass(self):
        return self.readInteger(0x4B)
    def readMagneticField(self):
        return {"x": self.readInteger(0x4D),
                "y": self.readInteger(0x4F),
                "z": self.readInteger(0x51)}
    def readGyro(self):
        return {"x": self.readInteger(0x53),
                "y": self.readInteger(0x55),
                "z": self.readInteger(0x57)}
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
    def getVal(self):
        return self.readValue()

class EV3Gyro(EVShieldUART):
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp)
        self.ref = 0
    def getAngle(self):
        return self.readValue()
    def getRegAngle(self):
        return self.readValue() - self.ref
    def setRef(self):
        self.ref = self.readValue()

class EV3Infrared(EVShieldUART):
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
        EVShieldUART.__init__(self, shield, bp, type=SH_Type_EV3_SWITCH)
    def isPressed(self):
        return self.readLocationByte(0x83) == 1
    def getBumpCount(self):
        return self.readLocationByte(0x84)
    def resetBumpCount(self):
        return self.writeLocation(0x84, 0)

class EV3Ultrasonic(EVShieldUART):
    def getDist(self):
        return self.readValue()/10
    def detect(self):
        return self.readValue()

class LightSensorArray(EVShieldI2C):
    def __init__(self, i2c_address=0x02):
        EVShieldI2C.__init__(self, i2c_address)
    def calibrateWhite(self):
        self.issueCommand(ord('W'))
    def calibrateBlack(self):
        self.issueCommand(ord('B'))
    def sleep(self):
        self.issueCommand(ord('D'))
    def wakeUp(self):
        self.issueCommand(ord('P'))
    def configureUS(self):
        self.issueCommand(ord('A'))
    def configureEurope(self):
        self.issueCommand(ord('E'))
    def configureUniversal(self):
        self.issueCommand(ord('U'))
    def getCalibrated(self):
        self.readRegisters(0x42, 8)
    def getUncalibrated(self):
        self.readRegisters(0x6A, 16)
    def getWhiteLimit(self):
        self.readRegisters(0x4A, 8)
    def getBlackLimit(self):
        self.readRegisters(0x52, 8)
    def getWhiteCalibration(self):
        self.readRegisters(0x5A, 8)
    def getBlackCalibration(self):
        self.readRegisters(0x62, 8)

class LineLeader(EVShieldI2C):
    def __init__(self, i2c_address=0x02):
        EVShieldI2C.__init__(self, i2c_address)
    def calibrateWhite(self):
        self.issueCommand(ord('W'))
    def calibrateBlack(self):
        self.issueCommand(ord('B'))
    def sleep(self):
        self.issueCommand(ord('D'))
    def wakeUp(self):
        self.issueCommand(ord('P'))
    def invertLineColorToWhite(self):
        self.issueCommand(ord('I'))
    def resetColorInversion(self):
        self.issueCommand(ord('R'))
    def takeSnapshot(self):
        self.issueCommand(ord('S'))
    def configureUS(self):
        self.issueCommand(ord('A'))
    def configureEurope(self):
        self.issueCommand(ord('E'))
    def configureUniversal(self):
        self.issueCommand(ord('U'))
    def getSetPoint(self):
        return self.readByte(0x45)
    def setSetPoint(self, spoint):
        self.writeByte(0x45, spoint)
    def getKp(self):
        return self.readByte(0x46)
    def setKp(self, kp):
        self.writeByte(0x46, kp)
    def getKi(self):
        return self.readByte(0x47)
    def setKi(self, ki):
        self.writeByte(0x47, ki)
    def getKd(self):
        return self.readByte(0x48)
    def setKd(self, kd):
        self.writeByte(0x48, kd)
    def getKpFactor(self):
        return self.readByte(0x61)
    def setKpFactor(self, kpfact):
        self.writeByte(0x61, kpfact)
    def getKiFactor(self):
        return self.readByte(0x62)
    def setKiFactor(self, kifact):
        self.writeByte(0x62, kifact)
    def getKdFactor(self):
        return self.readByte(0x63)
    def setKdFactor(self, kdfact):
        self.writeByte(0x63, kdfact)
    def getSteering(self):
        return self.readByte(0x42)
    def getAverage(self):
        return self.readByte(0x43)
    def getResult(self):
        return self.readByte(0x44)
    def getRawCalibrated(self):
        self.readRegisters(0x49, 8)
    def getRawUncalibrated(self):
        self.readRegisters(0x74, 16)
    def getWhiteLimit(self):
        self.readRegisters(0x51, 8)
    def getBlackLimit(self):
        self.readRegisters(0x59, 8)
    def getWhiteCalibration(self):
        self.readRegisters(0x64, 8)
    def getBlackCalibration(self):
        self.readRegisters(0x6C, 8)

class MagicWand(EVShieldI2C):
    def __init__(self, i2c_address=0x70):
        EVShieldI2C.__init__(self, i2c_address)
    def lightWand(self, byteToWrite):
        self.writeByte(0x00, byteToWrite)

class NXTCam():
    pass

class NXTColor(EVShieldUART):
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp, type=SH_Type_COLORFULL)
    def readValue(self):
        return self.readLocationByte(0x70)*100.0/255
    def readColor(self):
        return self.readLocationByte(0x70)

class NXTCurrentMeter(EVShieldI2C):
    def __init__(self, i2c_address=0x28):
        EVShieldI2C.__init__(self, i2c_address)
    def getACurrent(self):
        return self.readInteger(0x43)
    def getRCurrent(self):
        return self.readInteger(0x45)
    def getReference(self):
        return self.readInteger(0x47)
    def setReferenceI(self):
        self.issueCommand(ord('d'))

class NXTLight(EVShieldAnalog):
    def __init__(self, shield, bp):
        EVShieldAnalog.__init__(self, shield, bp)
    def setReflected(self):
        self.setType(SH_Type_LIGHT_REFLECTED)
    def setAmbient(self):
        self.setType(SH_Type_LIGHT_AMBIENT)

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
