from EVShield import EVShield
from EVShieldDefines import *
import time

'''
You can use the getKeyPressCount method of an EVShield object to get the number of times a button
has been pressed since reset. It accepts one parameter, one of BTN_GO, BTN_LEFT, or BTN_RIGHT
(from EVShieldDefines).

This program will make the LEDs red until you press the GO button 5 times, which will turn them blue.
'''

evshield = EVShield()

evshield.ledSetRGB(255, 0, 0)

while evshield.getKeyPressCount(BTN_GO) < 5:
    time.sleep(1)

evshield.ledSetRGB(0, 0, 255)
