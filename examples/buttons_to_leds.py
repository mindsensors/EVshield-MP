from EVShield import EVShield
from EVShieldDefines import *
import time

evshield = EVShield()

while True:
    red   = 255 if evshield.getButtonState(BTN_GO) else 0
    green = 255 if evshield.getButtonState(BTN_LEFT) else 0
    blue  = 255 if evshield.getButtonState(BTN_RIGHT) else 0
    evshield.ledSetRGB(red, green, blue)
    evshield.centerLedSetRGB(red, green, blue)
    time.sleep(0.1)
