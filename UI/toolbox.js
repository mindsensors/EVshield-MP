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
      case 'A': method = 'evshield.bank_a.ledSetRGB'; break;
      case 'B': method = 'evshield.bank_b.ledSetRGB'; break;
      case 'A+B': method = 'evshield.ledSetRGB';      break;
      case 'C': method = 'evshield.centerLedSetRGB';  break;
  }
  return `${method}(${red}, ${green}, ${blue})\n`;
};

Blockly.Python['system_sleep'] = function(block) {
  var time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_.import_time = 'import time';
  return `time.sleep(${time})\n`;
};
