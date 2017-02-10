# main.py -- put your code here!

from pyb import I2C


SH_Bank_A = 0x34
SH_Bank_B = 0x36

SH_FIRMWARE_VERSION = 0x00
SH_VENDOR_ID = 0x08
SH_DEVICE_ID = 0x10
SH_FEATURE_SET = 0x18

BTN_LEFT = 1
BTN_GO = 2
BTN_RIGHT = 4

SH_BTN_PRESS = 0xDA
SH_BTN_LEFT_COUNT = 0xDB
SH_BTN_GO_COUNT = 0xDC
SH_BTN_RIGHT_COUNT = 0xDD

# maps button types to their count registers
BTN_TO_COUNT_REG = {
    BTN_LEFT: SH_BTN_LEFT_COUNT,
    BTN_GO: SH_BTN_GO_COUNT,
    BTN_RIGHT: SH_BTN_RIGHT_COUNT
}

SH_RGB_LED = 0xD7
#SH_CENTER_RGB_LED = 0xDE

class EVShield:
    def __init__(self, i2c_address_a = SH_Bank_A, i2c_address_b = SH_Bank_B):
        self.bank_a = EVShieldBank(1, i2c_address_a)
        self.bank_b = EVShieldBank(1, i2c_address_b)
    
    def getButtonState(self, btn):
        return self.bank_a.readByte(SH_BTN_PRESS) == btn
    
    # TODO: implement led patterns
    def waitForButtonPress(self, btn, led_pattern = 0):
        while not getButtonState(btn):
            pyb.delay(300)
    
    def ledSetRGB(self, red = 0, green = 0, blue = 0):
        self.bank_a.writeRegisters(SH_RGB_LED, bytes([red,green,blue]))
    
    def ledBreathingPattern(self):
        pass
    
    def ledHeartBeatPattern(self):
        pass
    
    def getKeyPressCount(self, btn):
        return self.bank_a.readByte(BTN_TO_COUNT_REG[btn])
    
    def resetKeyPressCount(self, btn):
        self.bank_a.writeByte(BTN_TO_COUNT_REG[btn], 0)

class EVShieldBank(I2C):
    def __init__(self, bus, i2c_address):
        super().__init__()
        self.init(I2C.MASTER, baudrate=20000)
        self.i2c_address = i2c_address >> 1
        self.timeout = 1000
    
    def readRegisters(self, register, length, timeout = None):
        return self.mem_read(length, self.i2c_address, register, timeout = timeout or self.timeout)
    
    def readByte(self, register, timeout = None):
        return self.mem_read(1, self.i2c_address, register, timeout = timeout or self.timeout)[0]
    
    def readInteger(self, register, timeout = None):
        pass
    
    def readLong(self, register, timeout = None):
        pass
    
    def readString(self, register, length, timeout = None):
        return self.mem_read(length, self.i2c_address, register, timeout = timeout or self.timeout).decode("utf-8")
    
    def writeRegisters(self, register, data, timeout = None):
        self.mem_write(data, self.i2c_address, register, timeout = timeout or self.timeout)
    
    def writeByte(self, register, dataByte, timeout = None):
        self.mem_write(bytes(dataByte), self.i2c_address, register, timeout = timeout or self.timeout)
    
    def writeInteger(self, register, dataInt, timeout = None):
        pass
    
    def writeLong(self, register, dataLong, timeout = None):
        pass
    
    def checkAddress(self):
        pass
    
    def setAddress(self, i2c_address):
        self.i2c_address = i2c_address
    
    def getAddress(self):
        return self.i2c_address
    
    def setTimeout(self, timeout):
        self.timeout = timeout
    
    def getTimeout(self):
        return self.timeout
    
    def getFirmwareVersion(self):
        return self.readString(SH_FIRMWARE_VERSION, 8)
    
    def getVendorID(self):
        return self.readString(SH_VENDOR_ID, 8)
    
    def getDeviceID(self):
        return self.readString(SH_DEVICE_ID, 8)
    
    def getFeatureSet(self):
        return self.readString(SH_FEATURE_SET, 8)
    
    def getInfo(self):
        return self.readString(SH_FIRMWARE_VERSION, 32)


ev = EVShield()
print(ev.getButtonState(BTN_GO))
ev.ledSetRGB(255,0,255)


'''
Servo_Base = 0x42
SA1_base = 0x48
SA2_base = 0x5E
SA3_base = 0x74
SD1_base = 0x8A
SD2_base = 0xA0

Contntrol_reg = 0x41

def get_RGB(Dev_ADDRESS= BANKA):
    list = i2c.mem_read(3,Dev_ADDRESS, Led_Base, timeout=1000)
    return list[0],list[1],list[2],

def set_Servo(device,value):
    data = bytearray(2)
    data[1] = int(value/256)
    data[0] = int(value)
    i2c.mem_write(data, Device_ADDRESS, Servo_Base +2*int(device),timeout=1000)

def read_SD1():
    if int(i2c.mem_read(1,Device_ADDRESS, SD1_base+3)[0]) == 0:
        list = i2c.mem_read(14,Device_ADDRESS, SD1_base+4)
        return(list)

def read_analog(port):
    list = i2c.mem_read(6,Device_ADDRESS, SA1_base +port*22)
    if list[0] == 1 : return(list[4] +list[5]*256) 
    else: return 0

def Set_type(port ,type):
    data = bytearray(1)
    data[0] = int(type)
    i2c.mem_write(data, Device_ADDRESS, SA1_base +2+port*22,timeout=1000)

def Set_mode(port ,mode,type =0):
    data = bytearray(2)
    data[0] = int(mode)
    data[1] = int(type)
    i2c.mem_write(data, Device_ADDRESS, SA1_base +port*22,timeout=1000)

def Set_pin(port ,mode):
    data = bytearray(1)
    data[0] = int(mode)
    i2c.mem_write(data, Device_ADDRESS, SA1_base+4 +port*22,timeout=1000)
'''
