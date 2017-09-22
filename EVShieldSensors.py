from EVShieldDefines import *
from EVShieldCom import *
from EVShield import *
import time, binascii

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
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp)
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
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp)
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

class NXTTouch(EVShieldAnalog):
    def __init__(self, shield, bp):
        EVShieldAnalog.__init__(self, shield, bp)
    def isPressed(self):
        return self.readRaw() < 300

class NXTVoltMeter(EVShieldI2C):
    def __init__(self, i2c_address=0x28):
        EVShieldI2C.__init__(self, i2c_address)
    def getAVoltage(self):
        return self.readInteger(0x43)
    def getRVoltage(self):
        return self.readInteger(0x45)
    def getReference(self):
        return self.readInteger(0x47)
    def setReferenceI(self):
        self.issueCommand(ord('d'))

class NumericPad(EVShieldI2C):
    def __init__(self, i2c_address=0xB4):
        EVShieldI2C.__init__(self, i2c_address)
        for b in list(binascii.unhexlify('41090F0A0F0A0F0A0F0A0F4A080A0F0A0F0A0F0A0F52080A0F0A0F0A0F0A0F5C030B200C2B08010100000101FF027B010B7D039C658C')):
            self.issueCommand(b)
    def getKeyPress(self, waitPeriod=1):
        timeout = time.ticks_ms() + waitPeriod*1000
        while time.ticks_ms() < timeout:
            reading = self.readInteger(0)
            for j in range(12):
                if reading & 1<<j:
                    return '#9630825*714'[j]
            time.sleep_ms(150)
        return None
    def getKeysPressed(self):
        return self.readInteger(0)

class PFMate(EVShieldI2C):
    def __init__(self, i2c_address=0x48):
        EVShieldI2C.__init__(self, i2c_address)
    def controlMotor(self, channel, control, operation, speed):
        self.setChannel(channel)
        if control in [PF_Control_A, PF_Control_Both]:
            self.setOperationA(operation)
            self.setSpeedA(speed)
        if control in [PF_Control_B, PF_Control_Both]:
            self.setOperationB(operation)
            self.setSpeedB(speed)
        self.sendSignal()
    def setChannel(self, channel):
        self.writeByte(0x42, channel)
    def setControl(self, control):
        self.writeByte(0x43, control)
    def setOperationA(self, operation):
        self.writeByte(0x44, operation)
    def setOperationB(self, operation):
        self.writeByte(0x46, operation)
    def setSpeedA(self, speed):
        self.writeByte(0x45, speed)
    def setSpeedB(self, speed):
        self.writeByte(0x47, speed)
    def sendSignal(self):
        self.issueCommand(ord('G'))

class PSPNx(EVShieldI2C):
    def __init__(self, i2c_address=0x02):
        EVShieldI2C.__init__(self, i2c_address)
    # power on the joystick receiver
    def energize(self):
        self.issueCommand(ord('R'))
	# power off the joystick receiver
	def deEnergize(self):
        self.issueCommand(ord('S'))
	# set the mode of the joystick to digital
	def setDigitalMode(self):
        self.issueCommand(ord('A'))
	# set the mode of the joystick to analog
    def setAnalogMode(self):
        self.issueCommand(ord('s'))
    #    byte                   :      0  -   255
    #    byte - 128             :   -128  -   127
    #   (byte - 128)*25         :  -3200  -  3175
    #  ((byte - 128)*25) >> 5   :   -100  -    99.22
    def mapByteToSpeed(self, byte):
        return (((byte - 128)*25) >> 5) & 0xFF
	# get the x-coordinate of the left joystick, between -100 and +100
	def getXLJoy(self):
        return self.mapByteToSpeed(self.readByte(0x44))
	# get the y-coordinate of the left joystick, between -100 and +100
	def getYLJoy(self):
        return self.mapByteToSpeed(self.readByte(0x45))
	# get the x-coordinate of the right joystick, between -100 and +100
	def getXRJoy(self):
        return self.mapByteToSpeed(self.readByte(0x46))
	# get the y-coordinate of the right joystick, between -100 and +100
	def getYRJoy(self):
        return self.mapByteToSpeed(self.readByte(0x47))
	# get the current button status of button set 1 and button set 2
    def getButtons(self):
        reading = self.readInteger(0x42)
        return [reading & 1<<i for i in range(16)]

class PiLight():
    pass

class RTC():
    pass

class SumoEyes():
    pass
