from EVShield import *

class EVShieldUART:
    def __init__(self, shield, bp):
        if bp not in [SH_BAS1, SH_BAS2, SH_BBS1, SH_BBS2]:
            raise ValueError("Invalid bank port!")

        if bp in [SH_BAS1, SH_BAS2]:
            self.bank = shield.bank_a
        else:
            self.bank = shield.bank_b

        if bp in [SH_BAS1, SH_BBS1]:
            self.offset = 0
        else:
            self.offset = 52
    def getMode(self):
        return self.bank.readByte(0x81 + self.offset)
    def isDeviceReady(self):
        return self.bank.readByte(0x70 + self.offset) == 1
    def setType(self, type):
        sensor = SH_S1 if self.offset == 0 else SH_S2
        self.bank.sensorSetType(sensor, type)
    def writeLocation(self, loc, data):
        self.bank.writeByte(loc + self.offset, data)
    def readLocationInt(self, loc):
        return self.bank.readInteger(loc + self.offset)
    def readLocationByte(self, loc):
        return self.bank.readByte(loc + self.offset)
    def setMode(self, newMode):
        self.bank.writeByte(0x81 + self.offset, newMode)
    def readValue(self):
        return self.readLocationInt(0x83)
    def readAndPrint(self, loc, len):
        result = " "
        for i in range(loc, loc+len):
            result += self.readLocationByte(i)
            result += " "
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
