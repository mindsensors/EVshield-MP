Blockly.defineBlocksWithJsonArray([

/* MOTORS */


/* SENSORS */


/* LED */
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

/* BUTTONS */
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

/* SYSTEM */
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
