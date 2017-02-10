# main.py -- put your code here!

from pyb import I2C
import time
A1 = 0
A2 = 1
A3 = 2
D1 = 3
D2 = 4

_NONE = 0
_ANIN = 1
_DO  = 2
_DI  = 3
_I2C = 4
_SERIAL = 5
HIGH = 1
LOW = 0



Device_ADDRESS = (0x34 >> 1)  
    
Device_WHO_AM_I    =  0x10
Device_VERSION    =  0x00
Device_VENDOR    =  0x08
Device_FEATURES    =  0x18
Servo_Base = 0x42
Led_Base  =  0xb6
SA1_base = 0x48
SA2_base = 0x5E
SA3_base = 0x74
SD1_base = 0x8A
SD2_base = 0xA0
KEY1_count = 0xba

Contntrol_reg  = 0x41

I2C(1, I2C.MASTER, baudrate=10000).deinit()
pyb.delay(100) 
i2c = I2C(1, I2C.MASTER, baudrate=60000)


def read_who_am_I():
    # read  the Device WHO_AM_I
    list = i2c.mem_read(8,Device_ADDRESS, Device_WHO_AM_I, timeout=1000)
    print(list.decode("utf-8") )
    
def read_features():
    # read  the Device WHO_AM_I
    list = i2c.mem_read(8,Device_ADDRESS, Device_FEATURES, timeout=1000)
    print(list.decode("utf-8"))    
 
def read_vendor():
    # read  the Device vendor
    name =""
    list = i2c.mem_read(8,Device_ADDRESS, Device_VENDOR, timeout=1000)
    print(list.decode("utf-8"))
    
    
def read_version():
    # read  the Device version
    list = i2c.mem_read(5,Device_ADDRESS, Device_VERSION, timeout=1000)
    print(list.decode("utf-8"))   

def read_info():
    # read  the Device version
    list = i2c.mem_read(32,Device_ADDRESS, Device_VERSION, timeout=1000)
    print(list.decode("utf-8"))       
 
 
def set_RGB(R,G,B):
    data = bytearray(3)
    data[0] = R
    data[1] = G
    data[2] = B
    #print(data)
    i2c.mem_write(data, Device_ADDRESS, Led_Base, timeout=1000)
    
def set_Servo(device,value):
    data = bytearray(2)
    data[1] = int(value/256)
    data[0] = int(value)
    i2c.mem_write(data, Device_ADDRESS, Servo_Base +2*int(device),timeout=1000)    
    
def read_SD1():
    # read  the SD2
    
    if int(i2c.mem_read(1,Device_ADDRESS, SD1_base+3)[0]) == 0:
        list = i2c.mem_read(14,Device_ADDRESS, SD1_base+4)
        return(list) 

def read_Key1Count():
    # read  the Key1Count
    
    list = i2c.mem_read(1,Device_ADDRESS, KEY1_count)
    return(list[0])    

def read_analog(port):
    # read  the SA2_analog
    list = i2c.mem_read(6,Device_ADDRESS, SA1_base +port*22)
    if list[0] == 1 : return(list[4] +list[5]*256) 
    else: return 0

def Set_type(port ,type):
    # set port type
    data = bytearray(1)
    data[0] = int(type)
    i2c.mem_write(data, Device_ADDRESS, SA1_base +2+port*22,timeout=1000)  
    


def Set_mode(port ,mode,type =0):
    # set port_mode
    data = bytearray(2)
    data[0] = int(mode)
    data[1] = int(type)
    
    i2c.mem_write(data, Device_ADDRESS, SA1_base +port*22,timeout=1000)    
         
def Set_pin(port ,mode):
    # read  the SA2_mode
    data = bytearray(1)
    data[0] = int(mode)
    i2c.mem_write(data, Device_ADDRESS, SA1_base+4 +port*22,timeout=1000)     
'''    
def readDevice():
    # read  the Device RGB values
    list = i2c.mem_read(2,Device_ADDRESS, Device_Target)
    temp = list[0] +list[1]*256
    return temp/100    
    
print (i2c.scan())
'''


read_info()
set_RGB(0,60,00)
#set_Servo(0,1200)
count = 0
Set_mode(D1,_DO)
Set_mode(A2,_ANIN)
Set_mode(A3,_ANIN)  
Set_mode(A1,_DO)
Set_mode(D1,_DO)

while True: 
    read_info()
    Set_mode(A2,_DO)
    Set_pin(A2,HIGH)
    Set_pin(D1,LOW)
    Set_pin(A1,LOW)
    set_RGB(100,0,00)
    pyb.delay(200)
    set_RGB(0,100,00)
    Set_pin(A2,LOW)
    Set_pin(D1,HIGH)
    Set_pin(A1,HIGH)
    Set_mode(A2,_ANIN)
    pyb.delay(200)
    print(read_analog(A2),read_analog(A3))    

while True:
    if read_analog(A3) >200 :
        set_Servo(0,800)
        set_RGB(100,0,00)
        Set_pin(A2,HIGH)
    else :
        set_Servo(0,1800)
        set_RGB(0,100,00)
        Set_pin(A2,LOW)
    #read_Key1Count()
    #print(read_analog(A1),read_analog(A2),read_analog(A3))
    print(read_analog(A2),read_analog(A3))
    
    read_SD1()
    #print (count)
    #read_SD1()
    
    #set_RGB(100,0,00)
    #pyb.delay(500)
    
    #set_RGB(0,100,00)
    #pyb.delay(500)
    #count =count+1
#print(i2c.mem_read(8,Device_ADDRESS, Device_VENDOR))
#print(i2c.mem_read(8,Device_ADDRESS, Device_WHO_AM_I))  
#print(i2c.mem_read(8,Device_ADDRESS, Device_VERSION ))
#while True:
    #print(readDevice()) 
    #print(readAmbTemp())
    #dealy(10)
    #print(i2c.mem_read(8,Device_ADDRESS, Device_VENDOR))
    #print(i2c.mem_read(8,Device_ADDRESS, Device_WHO_AM_I))  
    #print(i2c.mem_read(8,Device_ADDRESS, Device_VERSION ))
