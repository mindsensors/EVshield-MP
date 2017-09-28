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


/* EVShield */
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
}

]); // end defineBlocksWithJsonArray


Blockly.Python['motors_setspeed'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  var speed = block.getFieldValue('SPEED');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  var direction = parseInt(speed) >= 0 ? 'SH_Direction_Forward' : 'SH_Direction_Reverse';
  return `evshield.bank_${motor[1].toLowerCase()}.motorRunUnlimited(SH_Motor_${motor[3]}, ${direction}, ${Math.abs(speed)||0})\n`;
};
Blockly.Python['motors_getpos'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  return [`evshield.bank_${motor[1].toLowerCase()}.motorGetEncoderPosition(SH_Motor_${motor[3]})`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['motors_resetpos'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  return `evshield.bank_${motor[1].toLowerCase()}.motorResetEncoder(SH_Motor_${motor[3]})\n`;
};
Blockly.Python['motors_brake'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  return `evshield.bank_${motor[1].toLowerCase()}.motorStop(SH_Motor_${motor[3]}, SH_Next_Action_Brake)\n`;
};
Blockly.Python['motors_float'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  return `evshield.bank_${motor[1].toLowerCase()}.motorStop(SH_Motor_${motor[3]}, SH_Next_Action_Float)\n`;
};
Blockly.Python['motors_hold'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  return `evshield.bank_${motor[1].toLowerCase()}.motorStop(SH_Motor_${motor[3]}, SH_Next_Action_BrakeHold)\n`;
};
Blockly.Python['motors_seconds'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  var speed = block.getFieldValue('SPEED');
  var seconds = Blockly.Python.valueToCode(block, 'SECONDS', Blockly.Python.ORDER_ATOMIC);
  var next_action = block.getFieldValue('NEXT_ACTION');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  var direction = parseInt(speed) >= 0 ? 'SH_Direction_Forward' : 'SH_Direction_Reverse';
  return `evshield.bank_${motor[1].toLowerCase()}.motorRunSeconds(SH_Motor_${motor[3]},
                 ${direction},
                 ${Math.abs(speed)||0},
                 ${seconds},
                 SH_Completion_Wait_For,
                 ${next_action})\n`;
};
Blockly.Python['motors_degrees'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  var speed = block.getFieldValue('SPEED');
  var degrees = Blockly.Python.valueToCode(block, 'DEGREES', Blockly.Python.ORDER_ATOMIC);
  var next_action = block.getFieldValue('NEXT_ACTION');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  var direction = parseInt(speed) >= 0 ? 'SH_Direction_Forward' : 'SH_Direction_Reverse';
  return `evshield.bank_${motor[1].toLowerCase()}.motorRunDegrees(SH_Motor_${motor[3]},
                 ${direction},
                 ${Math.abs(speed)||0},
                 ${degrees},
                 SH_Completion_Wait_For,
                 ${next_action})\n`;
};
Blockly.Python['motors_rotations'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  var speed = block.getFieldValue('SPEED');
  var rotations = Blockly.Python.valueToCode(block, 'ROTATIONS', Blockly.Python.ORDER_ATOMIC);
  var next_action = block.getFieldValue('NEXT_ACTION');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  var direction = parseInt(speed) >= 0 ? 'SH_Direction_Forward' : 'SH_Direction_Reverse';
  return `evshield.bank_${motor[1].toLowerCase()}.motorRunRotations(SH_Motor_${motor[3]},
                 ${direction},
                 ${Math.abs(speed)||0},
                 ${rotations},
                 SH_Completion_Wait_For,
                 ${next_action})\n`;
};



Blockly.Python['led_set'] = function(block) {
  var which = block.getFieldValue('WHICH');
  var hex_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
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
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  return [`evshield.getButtonState(${which})`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['buttons_wait'] = function(block) {
  var which = block.getFieldValue('WHICH');
  var pattern = block.getFieldValue('PATTERN');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  return `evshield.waitForButtonPress(${which}, led_pattern=${pattern})\n`;
};
Blockly.Python['buttons_count'] = function(block) {
  var which = block.getFieldValue('WHICH');
  Blockly.Python.definitions_.init_evshield = "from EVShield import EVShield\nevshield = EVShield()";
  return [`evshield.getKeyPressCount(${which})`, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['system_sleep'] = function(block) {
  var time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_.import_time = 'import time';
  return `time.sleep(${time})\n`;
};
