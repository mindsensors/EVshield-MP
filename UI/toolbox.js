Blockly.defineBlocksWithJsonArray([

/* MOTORS */
{
  "type": "motors_setspeed",
  "message0": "set speed of %1 to %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "BAM1",
          "BAM1"
        ],
        [
          "BAM2",
          "BAM2"
        ],
        [
          "BBM1",
          "BBM1"
        ],
        [
          "BBM2",
          "BBM2"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "SPEED",
      "value": 0,
      "min": -100,
      "max": 100,
      "precision": 1
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "motors_getpos",
  "message0": "get position of %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "BAM1",
          "BAM1"
        ],
        [
          "BAM2",
          "BAM2"
        ],
        [
          "BBM1",
          "BBM1"
        ],
        [
          "BBM2",
          "BBM2"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 240
},
{
  "type": "motors_resetpos",
  "message0": "reset position of %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "BAM1",
          "BAM1"
        ],
        [
          "BAM2",
          "BAM2"
        ],
        [
          "BBM1",
          "BBM1"
        ],
        [
          "BBM2",
          "BBM2"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "motors_brake",
  "message0": "brake %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "BAM1",
          "BAM1"
        ],
        [
          "BAM2",
          "BAM2"
        ],
        [
          "BBM1",
          "BBM1"
        ],
        [
          "BBM2",
          "BBM2"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "motors_float",
  "message0": "float %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "BAM1",
          "BAM1"
        ],
        [
          "BAM2",
          "BAM2"
        ],
        [
          "BBM1",
          "BBM1"
        ],
        [
          "BBM2",
          "BBM2"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "motors_hold",
  "message0": "brake and hold %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "BAM1",
          "BAM1"
        ],
        [
          "BAM2",
          "BAM2"
        ],
        [
          "BBM1",
          "BBM1"
        ],
        [
          "BBM2",
          "BBM2"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "motors_seconds",
  "message0": "run %1 at speed %2 for %3 seconds and %4 when done",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "BAM1",
          "BAM1"
        ],
        [
          "BAM2",
          "BAM2"
        ],
        [
          "BBM1",
          "BBM1"
        ],
        [
          "BBM2",
          "BBM2"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "SPEED",
      "value": 0,
      "min": -100,
      "max": 100,
      "precision": 1
    },
    {
      "type": "input_value",
      "name": "SECONDS",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "NEXT_ACTION",
      "options": [
        [
          "brake",
          "SH_Next_Action_Brake"
        ],
        [
          "float",
          "SH_Next_Action_Float"
        ],
        [
          "brake and hold",
          "SH_Next_Action_BrakeHold"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "motors_degrees",
  "message0": "run %1 at speed %2 for %3 degrees and %4 when done",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "BAM1",
          "BAM1"
        ],
        [
          "BAM2",
          "BAM2"
        ],
        [
          "BBM1",
          "BBM1"
        ],
        [
          "BBM2",
          "BBM2"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "SPEED",
      "value": 0,
      "min": -100,
      "max": 100,
      "precision": 1
    },
    {
      "type": "input_value",
      "name": "DEGREES",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "NEXT_ACTION",
      "options": [
        [
          "brake",
          "SH_Next_Action_Brake"
        ],
        [
          "float",
          "SH_Next_Action_Float"
        ],
        [
          "brake and hold",
          "SH_Next_Action_BrakeHold"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "motors_rotations",
  "message0": "run %1 at speed %2 for %3 rotations and %4 when done",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "MOTOR",
      "options": [
        [
          "BAM1",
          "BAM1"
        ],
        [
          "BAM2",
          "BAM2"
        ],
        [
          "BBM1",
          "BBM1"
        ],
        [
          "BBM2",
          "BBM2"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "SPEED",
      "value": 0,
      "min": -100,
      "max": 100,
      "precision": 1
    },
    {
      "type": "input_value",
      "name": "ROTATIONS",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "NEXT_ACTION",
      "options": [
        [
          "brake",
          "SH_Next_Action_Brake"
        ],
        [
          "float",
          "SH_Next_Action_Float"
        ],
        [
          "brake and hold",
          "SH_Next_Action_BrakeHold"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},

/* SENSORS */
{
  "type": "sensors_nxttouch",
  "message0": "NXT touch sensor on port %1 is pressed",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 60
},
{
  "type": "sensors_nxtlight",
  "message0": "detected light from NXT light sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_nxtlight_setmode",
  "message0": "configure NXT light sensor on port %1 to measure %2 light",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "MODE",
      "options": [
        [
          "reflected",
          "setReflected"
        ],
        [
          "ambient",
          "setAmbient"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "sensors_nxtcolor_setmode",
  "message0": "configure NXT color sensor on port %1 to measure %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "MODE",
      "options": [
        [
          "the color of light",
          "SH_Type_COLORFULL"
        ],
        [
          "reflected red light intensity",
          "SH_Type_COLORRED"
        ],
        [
          "reflected green light intensity",
          "SH_Type_COLORGREEN"
        ],
        [
          "reflected blue light intensity",
          "SH_Type_COLORBLUE"
        ],
        [
          "ambient light level",
          "SH_Type_COLORNONE"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "sensors_nxtcolor",
  "message0": "detected %1 from NXT color sensor on port %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "READ_METHOD",
      "options": [
        [
          "color",
          "readColor"
        ],
        [
          "light level (intensity)",
          "readValue"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_ev3touch",
  "message0": "EV3 touch sensor on port %1 is pressed",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 60
},
{
  "type": "sensors_ev3touch_getbumpcount",
  "message0": "bump count of EV3 touch sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_ev3touch_resetbumpcount",
  "message0": "reset bump count of EV3 touch sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "sensors_ev3color",
  "message0": "detect color from EV3 color sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_ev3color_setmode",
  "message0": "configure EV3 color sensor on port %1 to measure %2 light",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "MODE",
      "options": [
        [
          "reflected",
          "MODE_Color_ReflectedLight"
        ],
        [
          "ambient",
          "MODE_Color_AmbientLight"
        ],
        [
          "color",
          "MODE_Color_MeasureColor"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "sensors_ev3gyro",
  "message0": "raw angle from EV3 gyro sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_ev3color_setref",
  "message0": "reset reference angle of EV3 gyro sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "sensors_ev3gyro_getref",
  "message0": "angle of the EV3 gyro sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_ev3ir_prox",
  "message0": "proximity of EV3 infrared sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_ev3ir_chanheading",
  "message0": "heading of EV3 infrared sensor on port %1 on channel %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "CHANNEL",
      "options": [
        [
          "1",
          "0"
        ],
        [
          "2",
          "1"
        ],
        [
          "3",
          "2"
        ],
        [
          "4",
          "3"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_ev3ir_chanprox",
  "message0": "proximity of EV3 infrared sensor on port %1 on channel %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "CHANNEL",
      "options": [
        [
          "1",
          "0"
        ],
        [
          "2",
          "1"
        ],
        [
          "3",
          "2"
        ],
        [
          "4",
          "3"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_ev3ir_chanbutton",
  "message0": "button of EV3 infrared sensor on port %1 on channel %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "CHANNEL",
      "options": [
        [
          "1",
          "0"
        ],
        [
          "2",
          "1"
        ],
        [
          "3",
          "2"
        ],
        [
          "4",
          "3"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_ev3ultra_detect",
  "message0": "EV3 ultrasonic sensor on port %1 detects motion",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 60
},
{
  "type": "sensors_ev3ultra_distance",
  "message0": "distance of EV3 ultrasonic sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "sensors_sumoeyes_detect",
  "message0": "detected obstacle zone from SumoEyes on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    }
  ],
  "output": "String",
  "colour": 60
},
{
  "type": "sensors_sumoeyes_setrange",
  "message0": "set SumoEyes on port %1 to %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "BAS1",
          "BAS1"
        ],
        [
          "BAS2",
          "BAS2"
        ],
        [
          "BBS1",
          "BBS1"
        ],
        [
          "BBS2",
          "BBS2"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "RANGE_METHOD",
      "options": [
        [
          "long range",
          "setLongRange"
        ],
        [
          "short range",
          "setShortRange"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},

/* EVSHIELD */
{
  "type": "led_set",
  "message0": "set LED %1 to color %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "WHICH",
      "options": [
        [
          "A",
          "A"
        ],
        [
          "B",
          "B"
        ],
        [
          "Both",
          "A+B"
        ],
        [
          "Center",
          "C"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "COLOR",
      "check": "Colour"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 140
},
{
  "type": "buttons_get",
  "message0": "button %1 is pressed",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "WHICH",
      "options": [
        [
          "GO",
          "BTN_GO"
        ],
        [
          "left",
          "BTN_LEFT"
        ],
        [
          "right",
          "BTN_RIGHT"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 200
},
{
  "type": "buttons_wait",
  "message0": "wait for button %1 to be pressed %2 with LED %3 pattern",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "WHICH",
      "options": [
        [
          "GO",
          "BTN_GO"
        ],
        [
          "left",
          "BTN_LEFT"
        ],
        [
          "right",
          "BTN_RIGHT"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "PATTERN",
      "options": [
        [
          "breathing (fade)",
          "1"
        ],
        [
          "heartbeat",
          "2"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 200
},
{
  "type": "buttons_count",
  "message0": "count times button %1 has been pressed",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "WHICH",
      "options": [
        [
          "GO",
          "BTN_GO"
        ],
        [
          "left",
          "BTN_LEFT"
        ],
        [
          "right",
          "BTN_RIGHT"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 200
},
{
  "type": "system_sleep",
  "message0": "wait for %1 seconds",
  "args0": [
    {
      "type": "input_value",
      "name": "TIME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 5
},
{
  "type": "system_voltage",
  "message0": "battery voltage",
  "output": "Number",
  "colour": 5
}

]); // end defineBlocksWithJsonArray


Blockly.Python['motors_setspeed'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  var speed = block.getFieldValue('SPEED');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  var direction = parseInt(speed) >= 0 ? 'SH_Direction_Forward' : 'SH_Direction_Reverse';
  return `evshield.bank_${motor[1].toLowerCase()}.motorRunUnlimited(SH_Motor_${motor[3]}, ${direction}, ${Math.abs(speed)||0})\n`;
};
Blockly.Python['motors_getpos'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  return [`evshield.bank_${motor[1].toLowerCase()}.motorGetEncoderPosition(SH_Motor_${motor[3]})`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['motors_resetpos'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  return `evshield.bank_${motor[1].toLowerCase()}.motorResetEncoder(SH_Motor_${motor[3]})\n`;
};
Blockly.Python['motors_brake'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  return `evshield.bank_${motor[1].toLowerCase()}.motorStop(SH_Motor_${motor[3]}, SH_Next_Action_Brake)\n`;
};
Blockly.Python['motors_float'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  return `evshield.bank_${motor[1].toLowerCase()}.motorStop(SH_Motor_${motor[3]}, SH_Next_Action_Float)\n`;
};
Blockly.Python['motors_hold'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  return `evshield.bank_${motor[1].toLowerCase()}.motorStop(SH_Motor_${motor[3]}, SH_Next_Action_BrakeHold)\n`;
};
Blockly.Python['motors_seconds'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  var speed = block.getFieldValue('SPEED');
  var seconds = Blockly.Python.valueToCode(block, 'SECONDS', Blockly.Python.ORDER_ATOMIC);
  var next_action = block.getFieldValue('NEXT_ACTION');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  var direction = parseInt(speed) >= 0 ? 'SH_Direction_Forward' : 'SH_Direction_Reverse';
  return `evshield.bank_${motor[1].toLowerCase()}.motorRunSeconds(SH_Motor_${motor[3]},
                 ${direction},
                 speed=${Math.abs(speed)||0},
                 seconds=${seconds},
                 next_action=${next_action})\n`;
};
Blockly.Python['motors_degrees'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  var speed = block.getFieldValue('SPEED');
  var degrees = Blockly.Python.valueToCode(block, 'DEGREES', Blockly.Python.ORDER_ATOMIC);
  var next_action = block.getFieldValue('NEXT_ACTION');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  var direction = parseInt(speed) >= 0 ? 'SH_Direction_Forward' : 'SH_Direction_Reverse';
  return `evshield.bank_${motor[1].toLowerCase()}.motorRunDegrees(SH_Motor_${motor[3]},
                 ${direction},
                 speed=${Math.abs(speed)||0},
                 degrees=${degrees},
                 next_action=${next_action})\n`;
};
Blockly.Python['motors_rotations'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  var speed = block.getFieldValue('SPEED');
  var rotations = Blockly.Python.valueToCode(block, 'ROTATIONS', Blockly.Python.ORDER_ATOMIC);
  var next_action = block.getFieldValue('NEXT_ACTION');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  var direction = parseInt(speed) >= 0 ? 'SH_Direction_Forward' : 'SH_Direction_Reverse';
  return `evshield.bank_${motor[1].toLowerCase()}.motorRunRotations(SH_Motor_${motor[3]},
                 ${direction},
                 speed=${Math.abs(speed)||0},
                 rotations=${rotations},
                 next_action=${next_action})\n`;
};

function sensor_definition(port, instanceName, className) {
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  Blockly.Python.definitions_[`import_${className}`] = `from EVShieldSensors import ${className}`;
  Blockly.Python.definitions_[`${instanceName}_${port}`] = `${instanceName}_${port} = ${className}(evshield, SH_${port})`;
}
function sensor_definition_i2c(port, instanceName, className) {
  Blockly.Python.definitions_[`import_${className}`] = `from EVShieldSensors import ${className}`;
  Blockly.Python.definitions_[`${instanceName}_${port}`] = `${instanceName}_${port} = ${className}(SH_${port})`;
}
Blockly.Python['sensors_nxttouch'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'nxttouch', 'NXTTouch');
  return [`nxttouch_${port}.isPressed()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_nxtlight'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'nxtlight', 'NXTLight');
  return [`nxtlight_${port}.readRaw()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_nxtlight_setmode'] = function(block) {
  var port = block.getFieldValue('PORT');
  var modeMethod = block.getFieldValue('MODE');
  sensor_definition(port, 'nxtlight', 'NXTLight');
  return `nxtlight_${port}.${modeMethod}()\n`;
};
Blockly.Python['sensors_nxtcolor_setmode'] = function(block) {
  var port = block.getFieldValue('PORT');
  var mode = block.getFieldValue('MODE');
  sensor_definition(port, 'nxtcolor', 'NXTColor');
  return `nxtcolor_${port}.setType(${mode})\n`;
};
Blockly.Python['sensors_nxtcolor'] = function(block) {
  var read_method = block.getFieldValue('READ_METHOD');
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'nxtcolor', 'NXTColor');
  return [`nxtcolor_${port}.${read_method}()\n`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3touch'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3touch', 'EV3Touch');
  return [`ev3touch_${port}.isPressed()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3touch_getbumpcount'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3touch', 'EV3Touch');
  return [`ev3touch_${port}.getBumpCount()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3touch_resetbumpcount'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3touch', 'EV3Touch');
  return `ev3touch_${port}.resetBumpCount()\n`;
};
Blockly.Python['sensors_ev3color'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3color', 'EV3Color');
  return [`ev3color_${port}.getVal()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3color_setmode'] = function(block) {
  var port = block.getFieldValue('PORT');
  var mode = block.getFieldValue('MODE');
  sensor_definition(port, 'ev3color', 'EV3Color');
  return `ev3color_${port}.setMode(${mode})\n`;
};
Blockly.Python['sensors_ev3gyro'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3gyro', 'EV3Gyro');
  return [`ev3gyro_${port}.getAngle()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3color_setref'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3gyro', 'EV3Gyro');
  return `ev3gyro_${port}.setRef()\n`;
};
Blockly.Python['sensors_ev3gyro_getref'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3gyro', 'EV3Gyro');
  return [`ev3gyro_${port}.getRefAngle()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3ir_prox'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3infrared', 'EV3Infrared');
  return [`ev3infrared_${port}.readProximity()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3ir_chanheading'] = function(block) {
  var port = block.getFieldValue('PORT');
  var channel = block.getFieldValue('CHANNEL');
  sensor_definition(port, 'ev3infrared', 'EV3Infrared');
  return [`ev3infrared_${port}.readChannelHeading(${channel})`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3ir_chanprox'] = function(block) {
  var port = block.getFieldValue('PORT');
  var channel = block.getFieldValue('CHANNEL');
  sensor_definition(port, 'ev3infrared', 'EV3Infrared');
  return [`ev3infrared_${port}.readChannelProximity(${channel})`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3ir_chanbutton'] = function(block) {
  var port = block.getFieldValue('PORT');
  var channel = block.getFieldValue('CHANNEL');
  sensor_definition(port, 'ev3infrared', 'EV3Infrared');
  return [`ev3infrared_${port}.readChannelButton(${channel})`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3ultra_detect'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3ultrasonic', 'EV3Ultrasonic');
  return [`ev3ultrasonic_${port}.detect()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_ev3ultra_distance'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'ev3ultrasonic', 'EV3Ultrasonic');
  return [`ev3ultrasonic_${port}.getDist()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_sumoeyes_detect'] = function(block) {
  var port = block.getFieldValue('PORT');
  sensor_definition(port, 'sumoeyes', 'SumoEyes');
  return [`sumoeyes_${port}.detectObstacleZone()`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['sensors_sumoeyes_setrange'] = function(block) {
  var port = block.getFieldValue('PORT');
  var range_method = block.getFieldValue('RANGE_METHOD');
  sensor_definition(port, 'sumoeyes', 'SumoEyes');
  return `sumoeyes_${port}.${range_method}()\n`;
};

Blockly.Python['led_set'] = function(block) {
  var which = block.getFieldValue('WHICH');
  var hex_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  var color = /#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})/.exec(hex_color);
  var red   = parseInt(color[1], 16);
  var green = parseInt(color[2], 16);
  var blue  = parseInt(color[3], 16);
  var method;
  switch(which) {
      case 'A': method = 'bank_a.ledSetRGB'; break;
      case 'B': method = 'bank_b.ledSetRGB'; break;
      case 'A+B': method = 'ledSetRGB';      break;
      case 'C': method = 'centerLedSetRGB';  break;
  }
  return `evshield.${method}(${red}, ${green}, ${blue})\n`;
};
Blockly.Python['buttons_get'] = function(block) {
  var which = block.getFieldValue('WHICH');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  return [`evshield.getButtonState(${which})`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['buttons_wait'] = function(block) {
  var which = block.getFieldValue('WHICH');
  var pattern = block.getFieldValue('PATTERN');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  return `evshield.waitForButtonPress(${which}, led_pattern=${pattern})\n`;
};
Blockly.Python['buttons_count'] = function(block) {
  var which = block.getFieldValue('WHICH');
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  return [`evshield.getKeyPressCount(${which})`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['system_sleep'] = function(block) {
  var time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_.import_time = 'import time';
  return `time.sleep(${time})\n`;
};
Blockly.Python['system_voltage'] = function(block) {
  Blockly.Python.definitions_.init_evshield = 'from EVShield import EVShield\nevshield = EVShield()';
  return [`evshield.bank_a.evshieldGetBatteryVoltage()/1000`, Blockly.Python.ORDER_NONE];
};
