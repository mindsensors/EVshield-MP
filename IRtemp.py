# main.py -- put your code here!

from pyb import I2C
import time
IrTemp_ADDRESS = (0x2A >> 1)  
    
IrTemp_WHO_AM_I    =  0x10
IrTemp_VERSION    =  0x00
IrTemp_VENDOR    =  0x08

IrTemp_Ambient  = 0x42
IrTemp_Target  =  0x44

i2c = I2C(1, I2C.MASTER, baudrate=100000)


def readAmbTemp():
    # read  the IrTemp RGB values
    list = i2c.mem_read(2,IrTemp_ADDRESS, IrTemp_Ambient)
    temp = list[0] +list[1]*256
    return temp/100
    
def readIrTemp():
    # read  the IrTemp RGB values
    list = i2c.mem_read(2,IrTemp_ADDRESS, IrTemp_Target)
    temp = list[0] +list[1]*256
    return temp/100    
    
print (i2c.scan())

#print(i2c.mem_read(8,IrTemp_ADDRESS, IrTemp_VENDOR))
#print(i2c.mem_read(8,IrTemp_ADDRESS, IrTemp_WHO_AM_I))  
#print(i2c.mem_read(8,IrTemp_ADDRESS, IrTemp_VERSION ))
while True:
    print(readIrTemp()) 
    #print(readAmbTemp())
    #dealy(10)
    #print(i2c.mem_read(8,IrTemp_ADDRESS, IrTemp_VENDOR))
    #print(i2c.mem_read(8,IrTemp_ADDRESS, IrTemp_WHO_AM_I))  
    #print(i2c.mem_read(8,IrTemp_ADDRESS, IrTemp_VERSION ))
