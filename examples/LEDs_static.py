from EVShield import EVShield
from EVShieldDefines import *
import time

'''
The EVShield has 3 LEDs. Bank A and Bank B each have one,
and then there is a center LED too. They are positioned as follows:
 _________________________________________
/                                         \
\                    C                    |
 |                                        |
/                                         |
|                                         |
|       |                         |       |
|       |                         |       |
|       |       EVShield-v2       |       |
|       |                         |       |
|       |     mindsensors.com     |       |
|       |                         |       |
|       |                         |       |
|       |                         |       |
|       |                         |       |
|       |                         |       |
|       |                         |       |
|   A                                 B   |
\_________________________________________/
where "A" is bank A's LED, "B" is bank B's LED, and "C" is the center LED.

Call ledSetRGB on an EVShield object to set both bank A and bank B's LED.
Call ledSetRGB on an EVShieldBank object (such as the bank_a and bank_b attributes
of an EVShield object) to set each individual LED.
Call centerLedSetRGB on an EVShield object to set the center LED's color.
Each of these methods accepts three arguments: the red, green, and blue intensity.
These values should be between 0 and 255 (inclusive).

This program alternated between two states. First, all three LEDs will be white for one second.
Then the bank A LED will be red, the bank B LED will be green, and the center LED will be blue.
'''

evshield = EVShield()

while True:
    # this sets the color of both the left and right LED
    evshield.ledSetRGB(255, 255, 255)
    # this sets the color of the center LED (between the GO and left buttons)
    evshield.centerLedSetRGB(255, 255, 255)
    time.sleep(1)

    # this sets just the bank A LED to red
    evshield.bank_a.ledSetRGB(255, 0, 0)
    # this sets just the bank B LED to green
    evshield.bank_b.ledSetRGB(0, 255, 0)
    # this sets the center LED to blue
    evshield.centerLedSetRGB(0, 0, 255)
    time.sleep(1)
