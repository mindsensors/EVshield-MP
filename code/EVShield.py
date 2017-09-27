from EVShieldDefines import *
from EVShieldCom import *
import struct
import pyb


class EVShieldBank(EVShieldI2C):
    # Voltage value returned in milli-volts.
    def evshieldGetBatteryVoltage(self):
        return self.readByte(SH_VOLTAGE) * 40
    
    # provided for backword compatibility with nxshield programs.
    def nxshieldGetBatteryVoltage(self):
        return self.evshieldGetBatteryVoltage()
    
    def EVShieldIssueCommand(self, command):
        self.writeByte(SH_COMMAND, ord(command))
    
    def ledSetRGB(self, red = 0, green = 0, blue = 0):
        self.writeRegisters(SH_RGB_LED, bytes([int(red),int(green),int(blue)]))
    
    # Motor Operation APIs.
    def helper(self, readOrWriteMethod, which_motor, motor1Register, motor2Register, value = None):
        if which_motor not in [SH_Motor_1, SH_Motor_2]:
            return # invalid motor
        register = motor1Register if which_motor == SH_Motor_1 else motor2Register
        if value:
            readOrWriteMethod(register, value)
        else:
            return readOrWriteMethod(register)
    
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
        if which_motor == SH_Motor_1 or which_motor == SH_Motor_Both:
            self.EVShieldIssueCommand('r')
        if which_motor == SH_Motor_2 or which_motor == SH_Motor_Both:
            self.EVShieldIssueCommand('s')
    
    def motorSetSpeedTimeAndControl(self, which_motors, speed, duration, control):
        if which_motors == SH_Motor_Both:
            control &= ~SH_CONTROL_GO # Clear the 'go right now' flag
            self.motorSetSpeedTimeAndControl(SH_Motor_1, speed, duration, control)
            self.motorSetSpeedTimeAndControl(SH_Motor_2, speed, duration, control)
            self.motorStartBothInSync()
        else:
            self.helper(self.writeRegisters, which_motors, SH_SPEED_M1, SH_SPEED_M2, bytes([speed%256, duration, 0, control]))
    
    def motorSetEncoderSpeedTimeAndControl(self, which_motors, encoder, speed, duration, control):
        if which_motors == SH_Motor_Both: # The motor control registers are back to back, and both can be written in one command
            control &= ~SH_CONTROL_GO # Clear the 'go right now' flag
            self.motorSetEncoderSpeedTimeAndControl(SH_Motor_1, encoder, speed, duration, control)
            self.motorSetEncoderSpeedTimeAndControl(SH_Motor_2, encoder, speed, duration, control)
            self.motorStartBothInSync()
        else: # Or, just issue the command for one motor
            self.helper(self.writeRegisters, which_motors, SH_SETPT_M1, SH_SETPT_M2, struct.pack('I', encoder) + bytes([speed%256, duration, 0, control]))
    
    def motorCheckStatusBit(self, which_motor, bit):
        return self.helper(self.readByte, which_motor, SH_STATUS_M1, SH_STATUS_M2) & bit == 0
    
    def motorIsTimeDone(self, which_motors):
        if which_motors == SH_Motor_Both:
            return self.motorCheckStatusBit(SH_Motor_1, SH_STATUS_TIME) \
               and self.motorCheckStatusBit(SH_Motor_2, SH_STATUS_TIME)
        else: 
            return self.motorCheckStatusBit(which_motors, SH_STATUS_TIME)
    
    def motorWaitUntilTimeDone(self, which_motors):
        pyb.delay(50) # this delay is required for the status byte to be available for reading.
        while not self.motorIsTimeDone(which_motors):
            pyb.delay(50)
    
    def motorIsTachoDone(self, which_motors):
        if which_motors == SH_Motor_Both:
            return self.motorCheckStatusBit(SH_Motor_1, SH_STATUS_TACHO) \
               and self.motorCheckStatusBit(SH_Motor_2, SH_STATUS_TACHO)
        else: 
            return self.motorCheckStatusBit(which_motors, SH_STATUS_TACHO)
    
    def motorWaitUntilTachoDone(self, which_motors):
        pyb.delay(50) # this delay is required for the status byte to be available for reading.
        while not self.motorIsTachoDone(which_motors):
            pyb.delay(50)
    
    def motorRunUnlimited(self, which_motors, direction, speed):
        control = SH_CONTROL_SPEED | SH_CONTROL_GO
        if direction == SH_Direction_Reverse: speed = -speed
        self.motorSetSpeedTimeAndControl(which_motors, speed, 0, control)
    
    def motorRunSeconds(self, which_motors, direction, speed, duration, wait_for_completion=SH_Completion_Wait_For, next_action=SH_Next_Action_Float):
        control = SH_CONTROL_SPEED | SH_CONTROL_TIME | SH_CONTROL_GO
        if next_action == SH_Next_Action_Brake: control |= SH_CONTROL_BRK
        elif (next_action == SH_Next_Action_BrakeHold): control |= SH_CONTROL_BRK | SH_CONTROL_ON
        
        if direction == SH_Direction_Reverse: speed = -speed
        self.motorSetSpeedTimeAndControl(which_motors, speed, duration, ctrl)
        if wait_for_completion == SH_Completion_Wait_For:
            self.motorWaitUntilTimeDone(which_motors)
    
    def motorRunTachometer(self, which_motors, direction, speed, tachometer, relative, wait_for_completion, next_action):
        control = SH_CONTROL_SPEED | SH_CONTROL_TACHO | SH_CONTROL_GO
        if next_action == SH_Next_Action_Brake: control |= SH_CONTROL_BRK
        elif (next_action == SH_Next_Action_BrakeHold): control |= SH_CONTROL_BRK | SH_CONTROL_ON
        
        if direction == SH_Direction_Reverse: speed = -speed
        
        # The tachometer can be absolute or relative.
        # If it is absolute, we ignore the direction parameter.

        if relative == SH_Move_Relative:
            control |= SH_CONTROL_RELATIVE
            # a (relative) forward command is always a positive tachometer reading
            final_tach = abs(tachometer)
            if speed < 0: # and a (relative) reverse command is always negative
                tachometer = -tachometer

        self.motorSetEncoderSpeedTimeAndControl(which_motors, tachometer, speed, 0, control)
        if wait_for_completion == SH_Completion_Wait_For:
            self.motorWaitUntilTachoDone(which_motors)
    
    def motorRunDegrees(self, which_motors, direction, speed, degrees, wait_for_completion=SH_Completion_Wait_For, next_action=SH_Next_Action_Float):
        self.motorRunTachometer(which_motors, direction, speed, degrees, SH_Move_Relative, wait_for_completion, next_action)
    
    def motorRunRotations(self, which_motors, direction, speed, rotations, wait_for_completion=SH_Completion_Wait_For, next_action=SH_Next_Action_Float):
        self.motorRunTachometer(which_motors, direction, speed, 360 * rotations, SH_Move_Relative, wait_for_completion, next_action)
    
    def motorStop(self, which_motors, next_action=SH_Next_Action_Float):
        if which_motors not in [SH_Motor_1, SH_Motor_2, SH_Motor_Both] \
        or next_action not in [SH_Next_Action_Float, SH_Next_Action_Brake, SH_Next_Action_BrakeHold]:
            return
        # These magic numbers are documented in the advanced development guide, "Supported I2C Commands" table
        base_code = ord('A') - 1 if next_action != SH_Next_Action_Float else ord('a') - 1
        self.EVShieldIssueCommand(base_code + which_motors)

'''
Along the top, from left to right, there is the RESET button, the GO button,
the center LED, and the left and right buttons. In the top-left corner there is
the power terminal. Bank A is on the left edge and Bank B is on the right edge.
From top to bottom, on each bank, there is Motor 1, Motor 2, Sensor 1, and Sensor 2.
Each bank has an LED at the bottom. On the back, opposite the power block, there are
six servo pins, each connected to a PWM pin on the board. Finally, there are a set of
hardware I2C pins at the bottom of the back of the board (for left to right:
GND, 5V, SCL, SDA)
 _________________________________________
/       RESET  GO   LED   <    >          \
\ +                                ...... |
 |-                                :::::: |
/                                         |
|                                         |
|       |                         |       |
| M1    |                         |    M1 |
|       A       EVShield-v2       B       |
| M2                                   M2 |
|       K     mindsensors.com     K       |
|       N                         N       |
|       A                         A       |
| BAS1  B                         B  BBS1 |
|       |                         |       |
| BAS2  |          G5CD           |  BBS2 |
|       |          ....           |       |
|   LED             I2C             LED   |
\_________________________________________/
'''
class EVShield():
    def __init__(self, i2c_address_a = SH_Bank_A, i2c_address_b = SH_Bank_B):
        self.bank_a = EVShieldBank(i2c_address_a)
        self.bank_b = EVShieldBank(i2c_address_b)
        self.ledBreathingPatternTimer = 0
        self.ledHeartBeatPatternTimer = 0
    
    def getButtonState(self, btn):
        return self.bank_a.readByte(SH_BTN_PRESS) & btn > 0
    
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
        t = self.ledBreathingPatternTimer
        if (t < 50):
            intensity = t/50.0 # 0.0 to 1.0
        else:
            intensity = (100-t)/50.0 # 1.0 to 0.0
        
        self.ledSetRGB(0, intensity*255, intensity*255)
        pyb.delay(10) # 10 ms * 100 unit period = 1 second loop
        
        self.ledBreathingPatternTimer += 1
        if (self.ledBreathingPatternTimer > 100):
            self.ledBreathingPatternTimer = 0
    
    def ledHeartBeatPattern(self):
        t = self.ledHeartBeatPatternTimer
        if (t < 15):
            intensity = t/15.0 # 0.0 to 1.0
        elif (t >= 15 and t < 30):
            intensity = (30-t)/15.0 # 1.0 to 0.0
        elif (t >= 30 and t < 45):
            intensity = (t-30)/15.0 # 0.0 to 1.0
        elif (t >= 45 and t < 60):
            intensity = (60-t)/15.0 # 1.0 to 0.0
        elif (t >= 60):
            intensity = 0
        
        self.ledSetRGB(intensity*255, 0, 0)
        pyb.delay(10) # 10 ms * 100 unit period = 1 second loop
        
        self.ledHeartBeatPatternTimer += 1
        if (self.ledHeartBeatPatternTimer > 100):
            self.ledHeartBeatPatternTimer = 0
    
    def getKeyPressCount(self, btn):
        return self.bank_a.readByte(BTN_TO_COUNT_REG[btn])
