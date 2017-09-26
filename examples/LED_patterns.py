from EVShield import EVShield
from EVShieldDefines import *

'''
You can show different patterns on the EVShield's LED while waiting for a button press.
For instance, you can have the LEDs fade in and out until you press the GO button.

This is useful if you want your program to wait for you, or if your program
needs you to press a button to continue.

Invoke the fuction waitForButtonPress on an EVShield object. This function requires
two arguments. First, you must specify which button to wait for. This must be one of
BTN_GO, BTN_LEFT, or BTN_RIGHT (from EVShieldDefines). The second argument must be 1 or 2.
1 corresponds to a "breathing" pattern (fade), while 2 corresponds to the heartbeat pattern.
Note both the bank A and bank B LEDs will show the pattern.

In this example, the breathing pattern is shown until you press the left button.
Then, the heartbeat pattern is shown until you press the right button. This repeats.

Note you may also call the ledBreathingPattern or ledHeartBeatPattern methods yourself,
but they must be invoked repeatedly and rapidly to create their patterns.
'''

evshield = EVShield()

while True:
    print("Waiting for the left button to be pressed...")
    evshield.waitForButtonPress(BTN_LEFT, led_pattern=1)
    print("Left button pressed!")
    
    print("Waiting for the right button to be pressed...")
    evshield.waitForButtonPress(BTN_RIGHT, led_pattern=2)
    print("Right button pressed!")
