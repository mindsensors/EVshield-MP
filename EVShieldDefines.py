### Defines from SHDefines.h ###

SH_BAS1 = 0x01 # Bank A Sensor port 1
SH_BAS2 = 0x02 # Bank A Sensor port 2
SH_BBS1 = 0x03 # Bank B Sensor port 1
SH_BBS2 = 0x04 # Bank B Sensor port 2

BTN_LEFT = 1
BTN_GO = 2
BTN_RIGHT = 4


### New/extra defines ###

SH_BTN_LEFT_COUNT = 0xDB
SH_BTN_GO_COUNT = 0xDC
SH_BTN_RIGHT_COUNT = 0xDD

# maps button types to their corresponding count registers
BTN_TO_COUNT_REG = {
    BTN_LEFT: SH_BTN_LEFT_COUNT,
    BTN_GO: SH_BTN_GO_COUNT,
    BTN_RIGHT: SH_BTN_RIGHT_COUNT
}

SH_FIRMWARE_VERSION = 0x00
SH_VENDOR_ID = 0x08
SH_DEVICE_ID = 0x10
SH_FEATURE_SET = 0x18


### Defines from EVShield.h ###

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
SH_Motor_1    = 0x01
SH_Motor_2    = 0x02
SH_Motor_Both = 0x03

SH_Next_Action_Float     = 0x00 # stop and let the motor coast
SH_Next_Action_Brake     = 0x01 # apply brakes, and resist change to tachometer, but if tach position is forcibly changed, do not restore position
SH_Next_Action_BrakeHold = 0x02 # apply brakes, and restore externally forced change to tachometer

SH_Direction_Reverse = 0x00
SH_Direction_Forward = 0x01

# Tachometer movement related constants
SH_Move_Absolute = 0x00 # Move the tach to absolute value provided
SH_Move_Relative = 0x01 # Move the tach relative to previous position

# Whether to wait for motor to finish it's current task or not
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


### Modes for UART sensors ###
# EVs_EV3Color.h
MODE_Color_ReflectedLight = 0x00
MODE_Color_AmbientLight   = 0x01
MODE_Color_MeasureColor   = 0x02
# EVs_EV3Gyro.h
MODE_Gyro_Angle = 0x00
MODE_Gyro_Rate  = 0x01
# EVs_EV3Infrared.h
MODE_Infrared_Proximity = 0x00
MODE_Infrared_Beacon    = 0x01
MODE_Infrared_Remote    = 0x02
# EVs_EV3Ultrasonic.h
MODE_Sonar_CM       = 0x00
MODE_Sonar_Inches   = 0x01
MODE_Sonar_Presence = 0x02


### Defines from EVs_NXTMMX.h ###
# Motor selection related constants
MMX_Motor_1    = 0x01
MMX_Motor_2    = 0x02
MMX_Motor_Both = 0x03
# Next action related constants
MMX_Next_Action_Float     = 0x00 # stop and let the motor coast
MMX_Next_Action_Brake     = 0x01 # apply brakes, and resist change to tachometer
MMX_Next_Action_BrakeHold = 0x02 # apply brakes, and restore externally forced change to tachometer
# Direction related constants
MMX_Direction_Forward = 0x01
MMX_Direction_Reverse = 0x00
# Tachometer related constants
MMX_Move_Relative = 0x01
MMX_Move_Absolute = 0x00
# Completion related constants
MMX_Completion_Wait_For  = 0x01
MMX_Completion_Dont_Wait = 0x00
# Speed constants (these are just convenience constants, you can use any value between 0 and 100)
MMX_Speed_Full   = 90
MMX_Speed_Medium = 60
MMX_Speed_Slow   = 25


### Defines from EVs_NXTServo.h ###
Servo_Position_Default = 1500
Servo_Speed_Full       = 0


### Defines from EVs_PFMate.h ###
PF_Channel_1 = 1
PF_Channel_2 = 2
PF_Channel_3 = 3
PF_Channel_4 = 4
PF_Control_Both = 0   
PF_Control_A    = 1
PF_Control_B    = 2
PF_Speed_Slow      = 1
PF_Speed_Medium    = 4
PF_Speed_Full      = 7
PF_Operation_Float   = 0
PF_Operation_Forward = 1
PF_Operation_Reverse = 2
PF_Operation_Brake   = 3
