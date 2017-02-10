# main.py -- put your code here!
import pyb

#leds = [pyb.LED(i) for i in range(1,5)]
#for l in leds: 
#    l.off()

#n = 0
#try:
#   while True:
#      n = (n + 1) % 4
#      leds[n].toggle()
#      pyb.delay(50)
#finally:
#    for l in leds:
#        l.off()
#from pyb import UART
#uart = pyb.UART(2, 115200)
#uart.write('hello')
#print(uart.readline() ) 

#uart.read(5) # read up to 5 bytes


from ardu_py import *

debug_print("test")
i=0
pin=5
led1 = 10
led2 = 11
led3 = 12
led4 = 13
pinMode(pin,INPUT)
pinMode(led1,OUTPUT)
pinMode(led2,OUTPUT)
pinMode(led3,OUTPUT)
pinMode(led4,OUTPUT)
while True :
    pyb.Pin.cpu.D15.high()
    pyb.Pin.cpu.D15.low()
    debug_print("test")
    
laststate = digitalRead(pin)
while True:
    if laststate != digitalRead(pin):
        laststate = digitalRead(pin)
               
        print(laststate)
        if laststate :
            for x in range(10, 13):digitalWrite(x,HIGH)
            
        else :
            for x in range(10, 13):digitalWrite(x,LOW)
'''    
    
from pyb import Pin
print ('low')

p_out = Pin('D15', Pin.OUT_PP)
#Pin('D15', Pin.OUT_PP).high()
#Pin('D15', Pin.OUT_PP).low()
pyb.Pin['D15'].high()


i=0
INPUT=0
INPUT_PULLUP=1
OUTPUT=2
HIGH=1
LOW=0

def pinMode(pin_number,mode):
	#??input: pullup or down
	if mode==INPUT:
		pyb.Pin(pin_number,pyb.Pin.IN,pyb.Pin.PULL_NONE)
	elif mode==INPUT_PULLUP:
		pyb.Pin(pin_number,pyb.Pin.IN,pyb.Pin.PULL_UP)
	elif mode==OUTPUT:
		pyb.Pin(pin_number,pyb.Pin.OUT_PP) 
    pyb.Pin[pin_number].high()

def digitalWrite(pin_number,state) :
        print pin_number
        if state==1:
            print pin_number
        #pyb.Pin[pin_number].high()
        #else :
		#pyb.Pin[pin_number].low()        

 
pin='D15'
pinMode('D15',OUTPUT)
#digitalWrite(pin,HIGH)

for i in range (100):
    digitalWrite('D15',LOW)
    delay(500)
    digitalWrite('D15',HIGH)
    delay(500)
#for i in range (100):
#	digitalWrite(pin,HIGH)
#	debug_print(i)
#	delay(500)

#	digitalWrite(pin,LOW)
#	debug_print(i)
#	delay(500)
'''