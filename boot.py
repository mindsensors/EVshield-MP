# boot.py -- run on boot-up
# can run arbitrary Python, but best to keep it minimal
import sys
sys.path.append('code')

from EVShieldDefines import *

import pyb
pyb.main('main.py') # main script to run after this one
#pyb.main('code/examples/key_press_count.py')
