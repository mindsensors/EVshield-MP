from EVShield import EVShield
from EVShieldDefines import *

'''
The getButtonState method of an EVShield object will return True or False depending on
whether or not you are pressing the specified button. It requires one argument: which button to check for.
This must be one of BTN_GO, BTN_LEFT, or BTN_RIGHT (from EVShieldDefines)

This program will make both LEDs red if GO is pressed, green if left is pressed, and blue if right is pressed.
Note you can combine colors, no problem. 

If you are into more advanced features of Python, here are two ways to write this program on one line:
while True: evshield.ledSetRGB(*[255*evshield.getButtonState(btn) for btn in [BTN_GO, BTN_LEFT, BTN_RIGHT]])
while True: evshield.ledSetRGB(*map(lambda btn: 255*evshield.getButtonState(btn), [BTN_GO, BTN_LEFT, BTN_RIGHT]))
'''

evshield = EVShield()

while True:
    red   = 255 if evshield.getButtonState(BTN_GO) else 0
    green = 255 if evshield.getButtonState(BTN_LEFT) else 0
    blue  = 255 if evshield.getButtonState(BTN_RIGHT) else 0
    evshield.ledSetRGB(red, green, blue)
