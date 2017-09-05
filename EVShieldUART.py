from EVShield import *

class EVShieldUART:
    def __init__(self, shield, bp):
        if bp not in [SH_BAS1, SH_BAS2, SH_BBS1, SH_BBS2]:
            raise ValueError("Invalid bank port!")
        self.bank = shield.bank_a if bp in [SH_BAS1, SH_BAS2] else shield.bank_b
        self.offset = 0 if bp in [SH_BAS1, SH_BBS1] else 52
    def getMode(self):
        return self.readLocationByte(0x81)
    def setMode(self, newMode):
        self.writeLocation(0x81, newMode)
    def setType(self, type):
        sensor = SH_S1 if self.offset == 0 else SH_S2
        self.bank.sensorSetType(sensor, type)
    def readValue(self):
        return self.readLocationInt(0x83)
    def isDeviceReady(self):
        return self.readLocationByte(0x70) == 1
    def writeLocation(self, loc, data):
        self.bank.writeByte(loc + self.offset, data)
    def readLocationInt(self, loc):
        return self.bank.readInteger(loc + self.offset)
    def readLocationByte(self, loc):
        return self.bank.readByte(loc + self.offset)
    def readAndPrint(self, loc, len):
        result = ""
        for i in range(loc, loc+len):
            result += self.readLocationByte(i)
        print(result)

class EV3Touch(EVShieldUART):
    def __init__(self, shield, bp):
        EVShieldUART.__init__(self, shield, bp)
        self.setType(SH_Type_EV3_SWITCH)
    def isPressed(self):
        return self.readLocationByte(0x83)
    def getBumpCount(self):
        return self.readLocationByte(0x84)
    def resetBumpCount(self):
        return self.writeLocation(0x84, 0)
