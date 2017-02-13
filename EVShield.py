# main.py -- put your code here!

import struct
from pyb import I2C


# Defines from SHDefines.h

# For the sensor bank ports
class SH_BankPort():
    SH_BAS1 = 0x01 # Bank A Sensor Port 1
    SH_BAS2 = 0x02 # Bank A Sensor Port 2
    SH_BBS1 = 0x03 # Bank B Sensor Port 1
    SH_BBS2 = 0x04 # Bank B Sensor Port 2

BTN_LEFT = 1
BTN_GO = 2
BTN_RIGHT = 4

SH_BTN_PRESS = 0xDA
SH_BTN_LEFT_COUNT = 0xDB
SH_BTN_GO_COUNT = 0xDC
SH_BTN_RIGHT_COUNT = 0xDD

# maps button types to their count registers
BTN_TO_COUNT_REG = {
    BTN_LEFT: SH_BTN_LEFT_COUNT,
    BTN_GO: SH_BTN_GO_COUNT,
    BTN_RIGHT: SH_BTN_RIGHT_COUNT
}

SH_RGB_LED = 0xD7
SH_CENTER_RGB_LED = 0xDE

SH_FIRMWARE_VERSION = 0x00
SH_VENDOR_ID = 0x08
SH_DEVICE_ID = 0x10
SH_FEATURE_SET = 0x18


# Defines from EVShield.h

# Motor control related constants.
SH_CONTROL_SPEED    = 0x01
SH_CONTROL_RAMP     = 0x02
SH_CONTROL_RELATIVE = 0x04
SH_CONTROL_TACHO    = 0x08
SH_CONTROL_BRK      = 0x10
SH_CONTROL_ON       = 0x20
SH_CONTROL_TIME     = 0x40
SH_CONTROL_GO       = 0x80

SH_STATUS_SPEED     = 0x01
SH_STATUS_RAMP      = 0x02
SH_STATUS_MOVING    = 0x04
SH_STATUS_TACHO     = 0x08
SH_STATUS_BREAK     = 0x10
SH_STATUS_OVERLOAD  = 0x20
SH_STATUS_TIME      = 0x40
SH_STATUS_STALL     = 0x80

SH_COMMAND   = 0x41
SH_VOLTAGE   = 0x6E

SH_SETPT_M1  = 0x42
SH_SPEED_M1  = 0x46
SH_TIME_M1   = 0x47
SH_CMD_B_M1  = 0x48
SH_CMD_A_M1  = 0x49

SH_SETPT_M2  = 0x4A
SH_SPEED_M2  = 0x4E
SH_TIME_M2   = 0x4F
SH_CMD_B_M2  = 0x50
SH_CMD_A_M2  = 0x51

# Read registers.
SH_POSITION_M1  = 0x52
SH_POSITION_M2  = 0x56
SH_STATUS_M1    = 0x5A
SH_STATUS_M2    = 0x5B
SH_TASKS_M1     = 0x5C
SH_TASKS_M2     = 0x5D

SH_ENCODER_PID  = 0x5E
SH_SPEED_PID    = 0x64
SH_PASS_COUNT   = 0x6A
SH_TOLERANCE    = 0x6B

SH_S1_MODE      = 0x6F
SH_S1_EV3_MODE  = 0x6F
SH_S1_ANALOG    = 0x70

SH_S2_MODE      = 0xA3
SH_S2_EV3_MODE  = 0x6F
SH_S2_ANALOG    = 0xA4

SH_BTN_PRESS      = 0xDA
SH_RGB_LED        = 0xD7
SH_CENTER_RGB_LED = 0xDE

SH_PS_TS_RAWX   = 0xE7
SH_PS_TS_RAWY   = 0xE9
SH_PS_TS_CALIBRATION_DATA_READY = 0x70
SH_PS_TS_CALIBRATION_DATA       = 0x71
SH_PS_TS_SAVE   = 0x77
SH_PS_TS_LOAD   = 0x6C
SH_PS_TS_UNLOCK = 0x45


# Constants to be used by user programs.
class SH_Motor():
    SH_Motor_1    = 0x01
    SH_Motor_2    = 0x02
    SH_Motor_Both = 0x03

class SH_Next_Action():
    SH_Next_Action_Float     = 0x00 # stop and let the motor coast
    SH_Next_Action_Brake     = 0x01 # apply brakes, and resist change to tachometer, but if tach position is forcibly changed, do not restore position
    SH_Next_Action_BrakeHold = 0x02 # apply brakes, and restore externally forced change to tachometer

class SH_Direction():
    SH_Direction_Reverse = 0x00
    SH_Direction_Forward = 0x01

# Tachometer movement related constants
class SH_Move():
    SH_Move_Absolute = 0x00 # Move the tach to absolute value provided
    SH_Move_Relative = 0x01 # Move the tach relative to previous position

# Whether to wait for motor to finish it's current task or not
class SH_Completion_Wait():
  SH_Completion_Dont_Wait = 0x00 # Don't wait for motor to finish, program will continue with next function
  SH_Completion_Wait_For  = 0x01 # Wait for motor to finish, program will wait until current function finishes it's operation

# Speed constants: these are just convenience constants, you can use any value between 0 and 100.
SH_Speed_Full   = 90
SH_Speed_Medium = 60
SH_Speed_Slow   = 25

# EVShield has two banks, and each of them has different I2C address. Each bank has 2 motors and 2 sensors.
SH_Bank_A = 0x34
SH_Bank_B = 0x36

# Sensor type primitives
SH_Type_NONE   = 0x00 # In this type the sensor port is not defined and not used
SH_Type_SWITCH = 0x01
SH_Type_ANALOG = 0x02 # In this type the sensor port is not powered (for sensors like touch sensor)
SH_Type_LIGHT_REFLECTED = 0x03
SH_Type_LIGHT_AMBIENT   = 0x04
SH_Type_I2C    = 0x09 # In this type the sensor connected should be an i2c device

SH_Type_COLORFULL  = 13
SH_Type_COLORRED   = 14
SH_Type_COLORGREEN = 15
SH_Type_COLORBLUE  = 16
SH_Type_COLORNONE  = 17 # In this type the sensor connected is NXT color sensor in ambient light mode
SH_Type_EV3_SWITCH = 18 # In this type the sensor connected is EV3 touch sensor
SH_Type_EV3        = 19 # In this type the sensor connected is EV3 UART sensor

# Sensor defines: these are used internally to address Sensor Port 1 or 2.
# Do not use these in programs, programs should use SH_BankPort enums.
SH_S1 = 1
SH_S2 = 2


class EVShield:
    def __init__(self, i2c_address_a = SH_Bank_A, i2c_address_b = SH_Bank_B):
        self.bank_a = EVShieldBank(i2c_address_a)
        self.bank_b = EVShieldBank(i2c_address_b)
        self.ledBreathingPatternTimer = 0
        self.ledHeartBeatPatternTimer = 0
    
    def getButtonState(self, btn):
        return self.bank_a.readByte(SH_BTN_PRESS) == btn
    
    def waitForButtonPress(self, btn, led_pattern = 1):
        while not self.getButtonState(btn):
            if led_pattern == 1:
                self.ledBreathingPattern()
            elif led_pattern == 2:
                self.ledHeartBeatPattern()
            else:
                pyb.delay(300)
    
    def ledSetRGB(self, red = 0, green = 0, blue = 0):
        self.bank_a.writeRegisters(SH_RGB_LED, bytes([int(red),int(green),int(blue)]))
        self.bank_b.writeRegisters(SH_RGB_LED, bytes([int(red),int(green),int(blue)]))
    
    def centerLedSetRGB(self, red = 0, green = 0, blue = 0):
        self.bank_a.writeRegisters(SH_CENTER_RGB_LED, bytes([int(red),int(green),int(blue)]))
    
    def ledBreathingPattern(self):
        if (self.ledBreathingPatternTimer > 100):
            self.ledBreathingPatternTimer = 0
        
        if (self.ledBreathingPatternTimer < 50):
            intensity = self.ledBreathingPatternTimer/50.0 # 0.0 to 1.0
        else:
            intensity = (100-self.ledBreathingPatternTimer)/50.0 # 1.0 to 0.0
        
        self.ledSetRGB(0, intensity*255, intensity*255)
        pyb.delay(10) # 10 ms * 100 unit period = 1 second loop
        self.ledBreathingPatternTimer += 1
    
    def ledHeartBeatPattern(self):
        if (self.ledHeartBeatPatternTimer > 100):
            self.ledHeartBeatPatternTimer = 0
        
        if (self.ledHeartBeatPatternTimer < 15):
            intensity = self.ledHeartBeatPatternTimer/15.0 # 0.0 to 1.0
        elif (self.ledHeartBeatPatternTimer >= 15 and self.ledHeartBeatPatternTimer < 30):
            intensity = (30-self.ledHeartBeatPatternTimer)/15.0 # 1.0 to 0.0
        elif (self.ledHeartBeatPatternTimer >= 30 and self.ledHeartBeatPatternTimer < 45):
            intensity = (self.ledHeartBeatPatternTimer-30)/15.0 # 0.0 to 1.0
        elif (self.ledHeartBeatPatternTimer >= 45 and self.ledHeartBeatPatternTimer < 60):
            intensity = (60-self.ledHeartBeatPatternTimer)/15.0 # 1.0 to 0.0
        elif (self.ledHeartBeatPatternTimer >= 60):
            intensity = 0
        
        self.ledSetRGB(0, intensity*255, intensity*255)
        pyb.delay(10) # 10 ms * 100 unit period = 1 second loop
        self.ledHeartBeatPatternTimer += 1
    
    def getKeyPressCount(self, btn):
        return self.bank_a.readByte(BTN_TO_COUNT_REG[btn])
    
    def resetKeyPressCount(self, btn):
        self.bank_a.writeByte(BTN_TO_COUNT_REG[btn], 0)

class EVShieldBank():
    # EVShieldI2C
    def __init__(self, i2c_address):
        #I2C(1, I2C.MASTER, baudrate=20000).deinit()
        self.i2c = I2C(1)
        self.i2c.init(I2C.MASTER, baudrate=20000)
        self.i2c_address = i2c_address >> 1
        self.timeout = 1000
    
    def readRegisters(self, register, length, timeout = None):
        return self.i2c.mem_read(length, self.i2c_address, register, timeout = timeout or self.timeout)
    
    def readByte(self, register, timeout = None):
        return self.i2c.mem_read(1, self.i2c_address, register, timeout = timeout or self.timeout)[0]
    
    def readInteger(self, register, timeout = None):
        return struct.unpack('H', self.i2c.mem_read(2, self.i2c_address, register, timeout = timeout or self.timeout))[0]
    
    def readLong(self, register, timeout = None):
        return struct.unpack('I', self.i2c.mem_read(4, self.i2c_address, register, timeout = timeout or self.timeout))[0]
    
    def readString(self, register, length, timeout = None):
        return self.i2c.mem_read(length, self.i2c_address, register, timeout = timeout or self.timeout).decode("utf-8")
    
    def writeRegisters(self, register, data, timeout = None):
        self.i2c.mem_write(data, self.i2c_address, register, timeout = timeout or self.timeout)
    
    def writeByte(self, register, dataByte, timeout = None):
        self.i2c.mem_write(bytes(dataByte), self.i2c_address, register, timeout = timeout or self.timeout)
    
    def writeInteger(self, register, dataInt, timeout = None):
        self.i2c.mem_write(struct.pack('H', dataInt), self.i2c_address, register, timeout = timeout or self.timeout)
    
    def writeLong(self, register, dataLong, timeout = None):
        self.i2c.mem_write(struct.pack('I', dataLong), self.i2c_address, register, timeout = timeout or self.timeout)
    
    def checkAddress(self):
        return self.i2c_address in self.i2c.scan()
    
    def setAddress(self, i2c_address):
        self.i2c_address = i2c_address
    
    def getAddress(self):
        return self.i2c_address
    
    def setTimeout(self, timeout):
        self.timeout = timeout
    
    def getTimeout(self):
        return self.timeout
    
    def getFirmwareVersion(self):
        return self.readString(SH_FIRMWARE_VERSION, 8)
    
    def getVendorID(self):
        return self.readString(SH_VENDOR_ID, 8)
    
    def getDeviceID(self):
        return self.readString(SH_DEVICE_ID, 8)
    
    def getFeatureSet(self):
        return self.readString(SH_FEATURE_SET, 8)
    
    def getInfo(self):
        return self.readString(SH_FIRMWARE_VERSION, 32)
    
    # EVShieldBank
    
    def helper(self, readOrWriteMethod, which_motor, motor1Register, motor2Register, value = None):
        # TODO: make enums implement iterable, change to `which_motor not in SH_Motor`
        if which_motor != SH_Motor.SH_Motor_1 and which_motor != SH_Motor.SH_Motor_2:
            return # invalid motor
        if value:
            readOrWriteMethod(motor1Register if which_motor == SH_Motor.SH_Motor_1 else motor2Register, value)
        else:
            return readOrWriteMethod(motor1Register if which_motor == SH_Motor.SH_Motor_1 else motor2Register)
    
    # Voltage value returned in milli-volts.
    def evshieldGetBatteryVoltage(self):
        return self.readByte(SH_VOLTAGE) * 40
    
    # provided for backword compatibility with nxshield programs.
    def nxshieldGetBatteryVoltage(self):
        return self.evshieldGetBatteryVoltage()
    
    def EVShieldIssueCommand(self, command):
        self.writeByte(SH_COMMAND, command)
    
    # Motor Operation APIs.
    def motorSetEncoderTarget(self, which_motor, target):
        self.helper(self.writeLong, which_motor, SH_SETPT_M1, SH_SETPT_M2, target)
    
    def motorGetEncoderTarget(self, which_motor):
        return self.helper(self.readLong, which_motor, SH_SETPT_M1, SH_SETPT_M2)
    
    def motorSetSpeed(self, which_motor, speed):
        self.helper(self.writeByte, which_motor, SH_SPEED_M1, SH_SPEED_M2, speed)
    
    def motorGetSpeed(self, which_motor):
        return self.helper(self.readByte, which_motor, SH_SPEED_M1, SH_SPEED_M2)
    
    def motorSetTimeToRun(self, which_motor, seconds):
        self.helper(self.writeByte, which_motor, SH_TIME_M1, SH_TIME_M2, seconds)
    
    def motorGetTimeToRun(self, which_motor):
        return self.helper(self.readByte, which_motor, SH_TIME_M1, SH_TIME_M2)
    
    def motorSetCommandRegB(self, which_motor, value):
        self.helper(self.writeByte, which_motor, SH_CMD_B_M1, SH_CMD_B_M2, value)
    
    def motorGetCommandRegB(self, which_motor):
        return self.helper(self.readByte, which_motor, SH_CMD_B_M1, SH_CMD_B_M2)
    
    def motorSetCommandRegA(self, which_motor, value):
        self.helper(self.writeByte, which_motor, SH_CMD_A_M1, SH_CMD_A_M2, value)
    
    def motorGetCommandRegA(self, which_motor):
        return self.helper(self.readByte, which_motor, SH_CMD_A_M1, SH_CMD_A_M2)
    
    def motorGetEncoderPosition(self, which_motor):
        return self.helper(self.readLong, which_motor, SH_POSITION_M1, SH_POSITION_M2)
    
    def motorGetStatusByte(self, which_motor):
        return self.helper(self.readByte, which_motor, SH_STATUS_M1, SH_STATUS_M2)
    
    def motorGetTasksRunningByte(self, which_motor):
        return self.helper(self.readByte, which_motor, SH_TASKS_M1, SH_TASKS_M2)
    
    def motorSetEncoderPID(self, Kp, Ki, Kd):
        self.writeRegisters(SH_ENCODER_PID, struct.pack('HHH', Kp,Ki,Kd))
    
    def motorSetSpeedPID(self, Kp, Ki, Kd):
        self.writeRegisters(SH_SPEED_PID, struct.pack('HHH', Kp,Ki,Kd))
    
    def motorSetPassCount(self, pass_count):
        self.writeByte(SH_PASS_COUNT, pass_count)
    
    def motorSetTolerance(self, tolerance):
        self.writeByte(SH_TOLERANCE, tolerance)
    
    def motorReset(self):
        self.EVShieldIssueCommand('R')
    
    def motorStartBothInSync(self):
        self.EVShieldIssueCommand('S')
    
    def motorResetEncoder(self, which_motor):
        if which_motor == SH_Motor.SH_Motor_1 or which_motor == SH_Motor.SH_Motor_Both:
            self.EVShieldIssueCommand('r')
        if which_motor == SH_Motor.SH_Motor_2 or which_motor == SH_Motor.SH_Motor_Both:
            self.EVShieldIssueCommand('s')
    
    def motorSetSpeedTimeAndControl(self, which_motors, speed, duration, control):
        if which_motors == SH_Motor.SH_Motor_Both:
            control &= ~SH_CONTROL_GO # Clear the 'go right now' flag
            self.motorSetSpeedTimeAndControl(SH_Motor.SH_Motor_1, speed, duration, control)
            self.motorSetSpeedTimeAndControl(SH_Motor.SH_Motor_2, speed, duration, control)
            self.motorStartBothInSync()
        else:
            self.helper(self.writeRegisters, which_motors, SH_SPEED_M1, SH_SPEED_M2, bytes([speed, duration, 0, control]))
    
    def motorSetEncoderSpeedTimeAndControl(self, which_motors, encoder, speed, duration, control):
        if which_motors == SH_Motor.SH_Motor_Both: # The motor control registers are back to back, and both can be written in one command
            control &= ~SH_CONTROL_GO # Clear the 'go right now' flag
            self.motorSetEncoderSpeedTimeAndControl(SH_Motor.SH_Motor_1, encoder, speed, duration, control)
            self.motorSetEncoderSpeedTimeAndControl(SH_Motor.SH_Motor_2, encoder, speed, duration, control)
            self.motorStartBothInSync()
        else: # Or, just issue the command for one motor
            self.helper(self.writeRegisters, which_motors, SH_SETPT_M1, SH_SETPT_M2, struct.pack('I', encoder) + bytes([speed, duration, 0, control]))
    
    def motorIsTimeDone(self, which_motors):
        # because sections of this method were commented out (and there are no else blocks) it always returns 0
        return 0
        if which_motors == SH_Motor.SH_Motor_Both:
            s1 = motorGetStatusByte(SH_Motor_1)
            s2 = motorGetStatusByte(SH_Motor_2)
            if s1 & SH_STATUS_TIME == 0 and s2 & SH_STATUS_TIME == 0:
                # if stall bit was on there was an error
                #if s1 & SH_STATUS_STALL != 0 ors2 & SH_STATUS_STALL != 0:
                #    return SH_STATUS_STALL
                #else:
                    return 0
        else:
            s1 = motorGetStatusByte(which_motors)
            if s1 & SH_STATUS_TIME == 0:
                #if s1 & SH_STATUS_STALL != 0:
                #    return SH_STATUS_STALL
                #else:
                    return 0
    
    def motorWaitUntilTimeDone(self, which_motors):
        pyb.delay(50) # this delay is required for the status byte to be available for reading.
        while motorIsTimeDone(which_motors) & SH_STATUS_TIME != 0:
            pyb.delay(50)
    
    def motorIsTachoDone(self, which_motors):
        # because sections of this method were commented out (and there are no else blocks) it always returns 0
        return 0
        if which_motors == SH_Motor.SH_Motor_Both:
            s1 = motorGetStatusByte(SH_Motor_1)
            s2 = motorGetStatusByte(SH_Motor_2)
            if s1 & SH_STATUS_TACHO == 0 and s2 & SH_STATUS_TACHO == 0:
                # if stall bit was on there was an error
                #if s1 & SH_STATUS_STALL != 0 ors2 & SH_STATUS_STALL != 0:
                #    return SH_STATUS_STALL
                #else:
                    return 0
        else:
            s1 = motorGetStatusByte(which_motors)
            if s1 & SH_STATUS_TACHO == 0:
                #if s1 & SH_STATUS_STALL != 0:
                #    return SH_STATUS_STALL
                #else:
                    return 0
    
    def motorWaitUntilTachoDone(self, which_motors):
        pyb.delay(50) # this delay is required for the status byte to be available for reading.
        while motorIsTachoDone(which_motors) & SH_STATUS_TACHO != 0:
            pyb.delay(50)
    
    def motorRunUnlimited(self, which_motors, direction, speed):
        control = SH_CONTROL_SPEED | SH_CONTROL_GO
        if direction == SH_Direction.SH_Direction_Reverse: speed = -speed
        self.motorSetSpeedTimeAndControl(which_motors, speed, 0, control)
    
    def motorRunSeconds(self, which_motors, direction, speed, duration, wait_for_completion, next_action):
        control = SH_CONTROL_SPEED | SH_CONTROL_TIME | SH_CONTROL_GO
        if next_action == SH_Next_Action.SH_Next_Action_Brake: control |= SH_CONTROL_BRK
        elif (next_action == SH_Next_Action.SH_Next_Action_BrakeHold): control |= SH_CONTROL_BRK | SH_CONTROL_ON
        
        if direction == SH_Direction.SH_Direction_Reverse: speed = -speed
        self.motorSetSpeedTimeAndControl(which_motors, speed, duration, ctrl)
        if wait_for_completion == SH_Completion_Wait.SH_Completion_Wait_For:
            self.motorWaitUntilTimeDone(which_motors)
    
    def motorRunTachometer(self, which_motors, direction, speed, tachometer, relative, wait_for_completion, next_action):
        control = SH_CONTROL_SPEED | SH_CONTROL_TACHO | SH_CONTROL_GO
        if next_action == SH_Next_Action.SH_Next_Action_Brake: control |= SH_CONTROL_BRK
        elif (next_action == SH_Next_Action.SH_Next_Action_BrakeHold): control |= SH_CONTROL_BRK | SH_CONTROL_ON
        
        if direction == SH_Direction.SH_Direction_Reverse: speed = -speed
        
        # The tachometer can be absolute or relative.
        # If it is absolute, we ignore the direction parameter.

        if relative == SH_Move.SH_Move_Relative:
            control |= SH_CONTROL_RELATIVEdg
            # a (relative) forward command is always a positive tachometer reading
            final_tach = abs(tachometer)
            if speed < 0: # and a (relative) reverse command is always negative
                tachometer = -tachometer

        self.motorSetEncoderSpeedTimeAndControl(which_motors, tachometer, speed, 0, control)
        if wait_for_completion == SH_Completion_Wait.SH_Completion_Wait_For:
            self.motorWaitUntilTachoDone(which_motors)
    
    def motorRunDegrees(self, which_motors, direction, speed, degrees, wait_for_completion, next_action):
        self.motorRunTachometer(which_motors, direction, speed, degrees, SH_Move.SH_Move_Relative, wait_for_completion, next_action)
    
    def motorRunRotations(self, which_motors, direction, speed, rotations, wait_for_completion, next_action):
        self.motorRunTachometer(which_motors, direction, speed, 360 * rotations, SH_Move.SH_Move_Relative, wait_for_completion, next_action)
    
    def motorStop(self, which_motors, next_action):
        if (which_motor == SH_Motor.SH_Motor_1 or which_motor == SH_Motor.SH_Motor_2 or which_motor == SH_Motor.SH_Motor_Both) \
        and (next_action == SH_Next_Action.SH_Next_Action_Float or next_action == SH_Next_Action.SH_Next_Action_Brake or next_action == SH_Next_Action.SH_Next_Action_BrakeHold):
            # These magic numbers are documented in the advanced development guide, "Supported I2C Commands" table
            base_code = 'A' - 1 if next_action != SH_Next_Action.SH_Next_Action_Float else 'a' - 1
            self.EVShieldIssueCommand(base_code + which_motors)
    
    
    # EVShield sensor functions.
    def sensorSetType(which_sensor, sensor_type):
        if which_sensor == SH_S1:
            self.readInteger(SH_S1_MODE, sensor_type)
        elif which_sensor == SH_S2:
            self.readInteger(SH_S2_MODE, sensor_type)
    
    def sensorReadRaw(which_sensor):
        if which_sensor == SH_S1:
            return self.readInteger(SH_S1_ANALOG)
        elif which_sensor == SH_S2:
            return self.readInteger(SH_S2_ANALOG)
        else:
            return -1
    
    
    def ledSetRGB(self, red = 0, green = 0, blue = 0):
        self.writeRegisters(SH_RGB_LED, bytes([int(red),int(green),int(blue)]))


if __name__ == "__main__":
    ev = EVShield()
    ev.bank_a.motorSetSpeed(SH_Motor.SH_Motor_1, SH_Speed_Medium)
    print(ev.bank_a.motorGetSpeed(SH_Motor.SH_Motor_1))
    
    ev.bank_a.motorSetEncoderTarget(SH_Motor.SH_Motor_1, 15)
    print(ev.bank_a.motorGetEncoderTarget(SH_Motor.SH_Motor_1))
    
    #print(SH_Speed_Medium)


'''
Servo_Base = 0x42
SA1_base = 0x48
SA2_base = 0x5E
SA3_base = 0x74
SD1_base = 0x8A
SD2_base = 0xA0

Contntrol_reg = 0x41

def get_RGB(Dev_ADDRESS= BANKA):
    list = i2c.mem_read(3,Dev_ADDRESS, Led_Base, timeout=1000)
    return list[0],list[1],list[2],

def set_Servo(device,value):
    data = bytearray(2)
    data[1] = int(value/256)
    data[0] = int(value)
    i2c.mem_write(data, Device_ADDRESS, Servo_Base +2*int(device),timeout=1000)

def read_SD1():
    if int(i2c.mem_read(1,Device_ADDRESS, SD1_base+3)[0]) == 0:
        list = i2c.mem_read(14,Device_ADDRESS, SD1_base+4)
        return(list)

def read_analog(port):
    list = i2c.mem_read(6,Device_ADDRESS, SA1_base +port*22)
    if list[0] == 1 : return(list[4] +list[5]*256) 
    else: return 0

def Set_type(port ,type):
    data = bytearray(1)
    data[0] = int(type)
    i2c.mem_write(data, Device_ADDRESS, SA1_base +2+port*22,timeout=1000)

def Set_mode(port ,mode,type =0):
    data = bytearray(2)
    data[0] = int(mode)
    data[1] = int(type)
    i2c.mem_write(data, Device_ADDRESS, SA1_base +port*22,timeout=1000)

def Set_pin(port ,mode):
    data = bytearray(1)
    data[0] = int(mode)
    i2c.mem_write(data, Device_ADDRESS, SA1_base+4 +port*22,timeout=1000)
'''
