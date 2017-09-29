from EVShieldSensors import AbsoluteIMU
a = AbsoluteIMU(SH_BBS1)


import EVShieldCom
def c():
    EVShieldCom.pingTimer.deinit()


def b():
    while True:
        print(a.readTilt())
        pyb.delay(100)
b()