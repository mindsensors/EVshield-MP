Blockly.defineBlocksWithJsonArray([

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
  "colour": 140
},
// system_led defined in JavaScript below
{
  "type": "system_switch",
  "message0": "GO button is pressed",
  "output": "Boolean",
  "colour": 140
},
{
  "type": "system_switch_callback",
  "message0": "when GO is pressed %1 do %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "DO"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
},

/* SENSORS */
{
  "type": "grove_temperature_init",
  "message0": "new Temperature Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0
},
{
  "type": "grove_temperature_read",
  "message0": "read temperature from %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 0
},
{
  "type": "grove_temperature_ctof",
  "message0": "convert to Fahrenheit %1",
  "args0": [
    {
      "type": "input_value",
      "name": "CELSIUS"
    }
  ],
  "output": null,
  "colour": 0
},
{
  "type": "grove_gas_init",
  "message0": "new Gas Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20
},
{
  "type": "grove_gas_read",
  "message0": "read gas density from %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 20
},
{
  "type": "grove_light_init",
  "message0": "new Light Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 40
},
{
  "type": "grove_light_read",
  "message0": "read light level from %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 40
},
{
  "type": "grove_loudness_init",
  "message0": "new Loudness Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60
},
{
  "type": "grove_loudness_read",
  "message0": "read loudness level from %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 60
},
{
  "type": "grove_sound_init",
  "message0": "new Sound Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 80
},
{
  "type": "grove_sound_read",
  "message0": "read sound level from %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 80
},
{
  "type": "grove_moisture_init",
  "message0": "new Moisture Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 100
},
{
  "type": "grove_moisture_read",
  "message0": "read moisture level from %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 100
},
{
  "type": "grove_ph_init",
  "message0": "new pH Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120
},
{
  "type": "grove_ph_read",
  "message0": "read pH level from %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 120
},
{
  "type": "grove_piezo_init",
  "message0": "new Piezo Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 140
},
{
  "type": "grove_piezo_read",
  "message0": "read vibration level from %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 140
},
{
  "type": "grove_rotary_angle_init",
  "message0": "new Rotary Angle Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160
},
{
  "type": "grove_rotary_angle_read",
  "message0": "read rotary angle from %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 160
},
{
  "type": "grove_slide_pot_init",
  "message0": "new Slide Potentiometer on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 180
},
{
  "type": "grove_slide_pot_read",
  "message0": "position of slide potentiometer on %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 180
},
{
  "type": "grove_ultrasonic_init",
  "message0": "new Ultrasonic Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 200
},
{
  "type": "grove_ultrasonic_inches",
  "message0": "distance in inches on %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 200
},
{
  "type": "grove_ultrasonic_cm",
  "message0": "distance in centimeters on %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 200
},
{
  "type": "grove_button_init",
  "message0": "new Button Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 220
},
{
  "type": "grove_button_is_pressed",
  "message0": "button sensor on %1 is pressed",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 220
},
{
  "type": "grove_pir_motion_init",
  "message0": "new PIR Motion Sensor on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "grove_pir_motion_detect",
  "message0": "motion detected on %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 240
},
{
  "type": "grove_led_init",
  "message0": "new Grove LED Socket on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260
},
{
  "type": "grove_led_on",
  "message0": "turn on Grove LED Socket on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260
},
{
  "type": "grove_led_off",
  "message0": "turn off Grove LED Socket on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 260
},
{
  "type": "grove_buzzer_init",
  "message0": "new Buzzer on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 280
},
{
  "type": "grove_buzzer_on",
  "message0": "turn on buzzer on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 280
},
{
  "type": "grove_buzzer_off",
  "message0": "turn off buzzer on port %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ],
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
        ],
        [
          "A5",
          "A5"
        ],
        [
          "A6",
          "A6"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 280
},

/* SERVOS */
{
  "type": "servo_angle",
  "message0": "set servo %1 to angle %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ],
        [
          "S3",
          "S3"
        ],
        [
          "S4",
          "S4"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "ANGLE",
      "value": 0,
      "min": -90,
      "max": 90,
      "precision": 1
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240
},
{
  "type": "servo_speed",
  "message0": "set servo %1 to speed %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ],
        [
          "S3",
          "S3"
        ],
        [
          "S4",
          "S4"
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
  "type": "servo_angle_advanced",
  "message0": "set servo %1 %2 to angle %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ],
        [
          "S3",
          "S3"
        ],
        [
          "S4",
          "S4"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "ANGLE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "extensions": ["validate_servo_angle"]
},
{
  "type": "servo_speed_advanced",
  "message0": "set servo %1 %2 to speed %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "S1",
          "S1"
        ],
        [
          "S2",
          "S2"
        ],
        [
          "S3",
          "S3"
        ],
        [
          "S4",
          "S4"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "SPEED",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 240,
  "extensions": ["validate_servo_speed"]
},


/* DISPLAY */
{
  "type": "display_clear",
  "message0": "clear display",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
{
  "type": "display_fill",
  "message0": "fill display",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
{
  "type": "display_text",
  "message0": "display text %1 at x %2 y %3 %4 in size %5",
  "args0": [
    {
      "type": "input_value",
      "name": "TEXT"
    },
    {
      "type": "field_number",
      "name": "X",
      "value": 0,
      "min": 0,
      "max": 127,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "Y",
      "value": 0,
      "min": 0,
      "max": 63,
      "precision": 1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "SIZE",
      "options": [
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
{
  "type": "display_rect",
  "message0": "display rectangle %1 at x %2 y %3 %4 with width %5 height %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "X",
      "value": 0,
      "min": 0,
      "max": 127,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "Y",
      "value": 0,
      "min": 0,
      "max": 63,
      "precision": 1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "W",
      "value": 10,
      "min": 0,
      "max": 127,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "H",
      "value": 10,
      "min": 0,
      "max": 63,
      "precision": 1
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "extensions": ["validate_display_rect"]
},
{
  "type": "display_line",
  "message0": "display line %1 from x %2 y %3 %4 to x %5 y %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "X0",
      "value": 0,
      "min": 0,
      "max": 127,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "Y0",
      "value": 0,
      "min": 0,
      "max": 63,
      "precision": 1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "X1",
      "value": 10,
      "min": 0,
      "max": 127,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "Y1",
      "value": 10,
      "min": 0,
      "max": 63,
      "precision": 1
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
{
  "type": "display_circle",
  "message0": "display circle %1 at x %2 y %3 %4 with radius %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "X",
      "value": 10,
      "min": 0,
      "max": 127,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "Y",
      "value": 10,
      "min": 0,
      "max": 63,
      "precision": 1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "R",
      "value": 5,
      "min": 0,
      "precision": 1
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
{
  "type": "display_title",
  "message0": "display title %1 in size %2",
  "args0": [
    {
      "type": "input_value",
      "name": "TITLE"
    },
    {
      "type": "field_dropdown",
      "name": "SIZE",
      "options": [
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
/* DISPLAY (ADVANCED) */
{
  "type": "display_clear_no_refresh",
  "message0": "clear display without refresh",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
// display_pixel defined in JavaScript below
{
  "type": "display_text_advanced",
  "message0": "draw text %1 Text %2 X %3 Y %4 Size %5 Inverted? %6 %7 Refresh? %8",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "TEXT",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "SIZE",
      "check": "Number"
    },
    {
      "type": "field_checkbox",
      "name": "INVERTED",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "REFRESH",
      "checked": true
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "extensions": ["validate_display_text"]
},
// display_rect_advanced defined in JavaScript below
// display_line_advanced defined in JavaScript below
// display_circle_advanced defined in JavaScript below
{
  "type": "display_title_advanced",
  "message0": "draw title %1 Title %2 Size %3 Inverted? %4 %5 Refresh? %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "TITLE",
      "check": "String"
    },
    {
      "type": "input_value",
      "name": "SIZE",
      "check": "Number"
    },
    {
      "type": "field_checkbox",
      "name": "INVERTED",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "REFRESH",
      "checked": true
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "extensions": ["validate_display_title"]
},
{
  "type": "display_show",
  "message0": "show display",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
{
  "type": "display_invert",
  "message0": "set display %1 inverted? %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "INVERT",
      "checked": true
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
{
  "type": "display_contrast",
  "message0": "set display contrast %1",
  "args0": [
    {
      "type": "field_number",
      "name": "CONTRAST",
      "value": 255,
      "min": 0,
      "max": 255,
      "precision": 1
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
{
  "type": "display_on",
  "message0": "turn display on",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
},
{
  "type": "display_off",
  "message0": "turn display off",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300
}

]); // end defineBlocksWithJsonArray

// blocks defined with JavaScript for custom color fields
Blockly.Blocks['system_led'] = {
  init: function() {
    var input = this.appendDummyInput()
    input.appendField("turn")
    var colour = new Blockly.FieldColour('#ff0000');
    colour.setColours(['#f00','#0f0','#00f']).setColumns(1);
    input.appendField(colour, 'COLOR');
    input.appendField("LED")
    input.appendField(new Blockly.FieldDropdown([["on","True"], ["off","False"]]), "STATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(140);
  }
};
Blockly.Blocks['display_pixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw pixel");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    var input = this.appendDummyInput();
    input.appendField("Draw color");
    var colour = new Blockly.FieldColour('#ffffff');
    colour.setColours(['#ffffff','#000000']).setColumns(1);
    input.appendField(colour, 'COLOR');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setOnChange(function(changeEvent) {
      var x = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
      var y = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
      warning = '';
      if (!isNaN(x) && (x%1 != 0 || x < 0 || x > 127))
          warning += 'X must be an integer between 0 and 127.\n';
      if (!isNaN(y) && (y%1 != 0 || y < 0 || y > 63))
          warning += 'Y must be an integer between 0 and 63.\n';
      this.setWarningText(warning ? warning.slice(0, -1) : null);
    });
  }
};
Blockly.Blocks['display_rect_advanced'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw rectangle");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("W")
        .setCheck("Number")
        .appendField("Width");
    this.appendValueInput("H")
        .setCheck("Number")
        .appendField("Height");
    var input = this.appendDummyInput();
    input.appendField("Draw color");
    var colour = new Blockly.FieldColour('#ffffff');
    colour.setColours(['#ffffff','#000000']).setColumns(1);
    input.appendField(colour, 'COLOR');
    this.appendDummyInput()
        .appendField("Refresh?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "REFRESH");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setOnChange(function(changeEvent) {
      var x = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
      var y = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
      var w = Blockly.Python.valueToCode(this, 'W', Blockly.Python.ORDER_ATOMIC);
      var h = Blockly.Python.valueToCode(this, 'H', Blockly.Python.ORDER_ATOMIC);
      warning = '';
      if (!isNaN(x) && (x%1 != 0 || x < 0 || x > 127))
          warning += 'X must be an integer between 0 and 127.\n';
      if (!isNaN(y) && (y%1 != 0 || y < 0 || y > 63))
          warning += 'Y must be an integer between 0 and 63.\n';
      if (!isNaN(w) && (w%1 != 0 || w < 0 || w > 127))
          warning += 'Width must be an integer between 0 and 127.\n';
      if (!isNaN(h) && (h%1 != 0 || h < 0 || h > 63))
          warning += 'Height must be an integer between 0 and 63.\n';
      if (warning == '') {
          if (x+w > 127 || x+w < 0)
              warning += 'This rectangle will go off the edge of the screen! (horizontally)\n';
          if (y+h > 63 || y+h < 0)
              warning += 'This rectangle will go off the edge of the screen! (vertically)\n';
      }
      this.setWarningText(warning ? warning.slice(0, -1) : null);
    });
  }
};
Blockly.Blocks['display_line_advanced'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw line");
    this.appendValueInput("X0")
        .setCheck("Number")
        .appendField("X0");
    this.appendValueInput("Y0")
        .setCheck("Number")
        .appendField("Y0");
    this.appendValueInput("X1")
        .setCheck("Number")
        .appendField("X1");
    this.appendValueInput("Y1")
        .setCheck("Number")
        .appendField("Y1");
    var input = this.appendDummyInput();
    input.appendField("Draw color");
    var colour = new Blockly.FieldColour('#ffffff');
    colour.setColours(['#ffffff','#000000']).setColumns(1);
    input.appendField(colour, 'COLOR');
    this.appendDummyInput()
        .appendField("Refresh?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "REFRESH");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setOnChange(function(changeEvent) {
      var x0 = Blockly.Python.valueToCode(this, 'X0', Blockly.Python.ORDER_ATOMIC);
      var y0 = Blockly.Python.valueToCode(this, 'Y0', Blockly.Python.ORDER_ATOMIC);
      var x1 = Blockly.Python.valueToCode(this, 'X1', Blockly.Python.ORDER_ATOMIC);
      var y1 = Blockly.Python.valueToCode(this, 'Y1', Blockly.Python.ORDER_ATOMIC);
      warning = '';
      if (!isNaN(x0) && (x0%1 != 0 || x0 < 0 || x0 > 127))
          warning += 'X0 must be an integer between 0 and 127.\n';
      if (!isNaN(y0) && (y0%1 != 0 || y0 < 0 || y0 > 63))
          warning += 'Y0 must be an integer between 0 and 63.\n';
      if (!isNaN(x1) && (x1%1 != 0 || x1 < 0 || x1 > 127))
          warning += 'X1 must be an integer between 0 and 127.\n';
      if (!isNaN(y1) && (y1%1 != 0 || y1 < 0 || y1 > 63))
          warning += 'Y1 must be an integer between 0 and 63.\n';
      this.setWarningText(warning ? warning.slice(0, -1) : null);
    });
  }
};
Blockly.Blocks['display_circle_advanced'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw circle");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("R")
        .setCheck("Number")
        .appendField("Radius");
    var input = this.appendDummyInput();
    input.appendField("Draw color");
    var colour = new Blockly.FieldColour('#ffffff');
    colour.setColours(['#ffffff','#000000']).setColumns(1);
    input.appendField(colour, 'COLOR');
    this.appendDummyInput()
        .appendField("Refresh?")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "REFRESH");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setOnChange(function(changeEvent) {
      var x = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
      var y = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
      var r = Blockly.Python.valueToCode(this, 'R', Blockly.Python.ORDER_ATOMIC);
      warning = '';
      if (!isNaN(x) && (x%1 != 0 || x < 0 || x > 127))
          warning += 'X must be an integer between 0 and 127.\n';
      if (!isNaN(y) && (y%1 != 0 || y < 0 || y > 63))
          warning += 'Y must be an integer between 0 and 63.\n';
      if (!isNaN(r) && (r%1 != 0 || r < 0))
          warning += 'Radius must be a non-negative integer.\n';
      this.setWarningText(warning ? warning.slice(0, -1) : null);
    });
  }
};


// extensions for validating advanced blocks
Blockly.Extensions.register('validate_servo_angle', function() {
  this.setOnChange(function(changeEvent) {
    if (this.type != 'servo_angle_advanced') return;
    var angle = Blockly.Python.valueToCode(this, 'ANGLE', Blockly.Python.ORDER_ATOMIC);
    if (!isNaN(angle) && (angle%1 != 0 || angle > 90 || angle < -90))
      this.setWarningText('Angle must be an integer between 90 and -90.');
    else
      this.setWarningText(null);
  });
});
Blockly.Extensions.register('validate_servo_speed', function() {
  this.setOnChange(function(changeEvent) {
    if (this.type != 'servo_speed_advanced') return;
    var speed = Blockly.Python.valueToCode(this, 'SPEED', Blockly.Python.ORDER_ATOMIC);
    if (!isNaN(speed) && (speed%1 != 0 || speed > 100 || speed < -100))
      this.setWarningText('Speed must be an integer between 100 and -100.');
    else
      this.setWarningText(null);
  });
});
Blockly.Extensions.register('validate_display_text', function() {
  this.setOnChange(function(changeEvent) {
    if (this.type != 'display_text_advanced') return;
    var x = Blockly.Python.valueToCode(this, 'X', Blockly.Python.ORDER_ATOMIC);
    var y = Blockly.Python.valueToCode(this, 'Y', Blockly.Python.ORDER_ATOMIC);
    var size = Blockly.Python.valueToCode(this, 'SIZE', Blockly.Python.ORDER_ATOMIC);
    warning = '';
    if (!isNaN(x) && (x%1 != 0 || x < 0 || x > 127))
        warning += 'X must be an integer between 0 and 127.\n';
    if (!isNaN(y) && (y%1 != 0 || y < 0 || x > 63))
        warning += 'Y must be an integer between 0 and 63.\n';
    if (!isNaN(size) && (size%1 != 0 || size < 1 || size > 9))
        warning += 'Size must be an integer between 1 and 9.\n';
    this.setWarningText(warning ? warning.slice(0, -1) : null);
  });
});
Blockly.Extensions.register('validate_display_rect', function() {
  this.setOnChange(function(changeEvent) {
    if (this.type != 'display_rect') return;
    var block = Blockly.mainWorkspace.blockDB_[changeEvent.blockId];
    if (!block) return;
    var x = parseInt(block.getFieldValue('X'));
    var y = parseInt(block.getFieldValue('Y'));
    var w = parseInt(block.getFieldValue('W'));
    var h = parseInt(block.getFieldValue('H'));
    warning = '';
    if (x+w > 127 || x+w < 0)
        warning += 'This rectangle will go off the edge of the screen! (horizontally)\n';
    if (y+h > 63 || y+h < 0)
        warning += 'This rectangle will go off the edge of the screen! (vertically)\n';
    this.setWarningText(warning ? warning.slice(0, -1) : null);
  });
});
Blockly.Extensions.register('validate_display_title', function() {
  this.setOnChange(function(changeEvent) {
    if (this.type != 'display_title_advanced') return;
    var size = Blockly.Python.valueToCode(this, 'SIZE', Blockly.Python.ORDER_ATOMIC);
    if (!isNaN(size) && (size%1 != 0 || size < 1 || size > 9))
        this.setWarningText('Size must be an integer between 1 and 9.');
    else
        this.setWarningText(null);
  });
});



// [Python] code generators 
Blockly.Python['system_sleep'] = function(block) {
  var time = Blockly.Python.valueToCode(block, 'TIME', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_.import_time = 'import time';
  return `time.sleep(${time})\n`;
};
Blockly.Python['system_led'] = function(block) {
  var color = block.getFieldValue('COLOR');
  var state = block.getFieldValue('STATE');
  Blockly.Python.definitions_.import_pyb = 'import pyb';
  const color_key = {"#ff0000": 3, "#00ff00": 2, "#0000ff": 1};
  const color_names = {"#ff0000": "red", "#00ff00": "green", "#0000ff": "blue"};
  var instantiation = `LED_${color_names[color]} = pyb.LED(${color_key[color]})\n`;
  Blockly.Python.definitions_['LED_' + color_names[color]] = instantiation;
  const method_names = {"True": "on", "False": "off"};
  return `LED_${color_names[color]}.${method_names[state]}()\n`;
};
Blockly.Python['system_switch'] = function(block) {
  Blockly.Python.definitions_.import_pyb = 'import pyb';
  Blockly.Python.definitions_.usr_switch = 'go_button = pyb.Switch()\n'; // instantiation
  return ['go_button()', Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['system_switch_callback'] = function(block) {
  var statements_do = Blockly.Python.statementToCode(block, 'DO');
  if (!statements_do) return '';
  Blockly.Python.definitions_.usr_switch = 'go_button = pyb.Switch()\n'; // instantiation
  Blockly.Python.definitions_.switch_callback = 'def go_button_callback():\n' + statements_do;
  return 'go_button.callback(go_button_callback)\n';
};

function grove_definition(port, instanceBaseName, className) {
  Blockly.Python.definitions_.import_grove = 'import grove';
  var instantiation = `${instanceBaseName}${port} = grove.${className}('${port}')\n`;
  Blockly.Python.definitions_[instanceBaseName + port] = instantiation;
}
Blockly.Python['grove_temperature_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'temperatureSensor', 'Temperature_Sensor');
  return '';
};
Blockly.Python['grove_temperature_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'temperatureSensor', 'Temperature_Sensor');
  var code = `temperatureSensor${port}.read_temperature()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_temperature_ctof'] = function(block) {
  var celsius = Blockly.Python.valueToCode(block, 'CELSIUS', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_.import_grove = 'import grove';
  code = `grove.Temperature_Sensor.CtoF(${celsius})`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_gas_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'gasSensor', 'Gas_Sensor');
  return '';
};
Blockly.Python['grove_gas_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'gasSensor', 'Gas_Sensor');
  var code = `gasSensor${port}.read_density()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_light_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'lightSensor', 'Light_Sensor');
  return '';
};
Blockly.Python['grove_light_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'lightSensor', 'Light_Sensor');
  var code = `lightSensor${port}.read_light()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_loudness_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'loudnessSensor', 'Loudness_Sensor');
  return '';
};
Blockly.Python['grove_loudness_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'loudnessSensor', 'Loudness_Sensor');
  var code = `loudnessSensor${port}.read_loudness()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_sound_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'soundSensor', 'Sound_Sensor');
  return '';
};
Blockly.Python['grove_sound_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'soundSensor', 'Sound_Sensor');
  var code = `soundSensor${port}.read_level()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_moisture_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'moistureSensor', 'Moisture_Sensor');
  return '';
};
Blockly.Python['grove_moisture_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'moistureSensor', 'Moisture_Sensor');
  var code = `moistureSensor${port}.read_moisture()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_ph_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'pHsensor', 'pH_Sensor');
  return '';
};
Blockly.Python['grove_ph_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'pHsensor', 'pH_Sensor');
  var code = `pHsensor${port}.read_pH()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_piezo_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'piezoSensor', 'Piezo_Sensor');
  return '';
};
Blockly.Python['grove_piezo_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'piezoSensor', 'Piezo_Sensor');
  var code = `piezoSensor${port}.read_vibration()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_rotary_angle_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'rotaryAngleSensor', 'Rotary_Angle_Sensor');
  return '';
};
Blockly.Python['grove_rotary_angle_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'rotaryAngleSensor', 'Rotary_Angle_Sensor');
  var code = `rotaryAngleSensor${port}.read_degrees()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_slide_pot_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'slidePotentiometer', 'Slide_Potentiometer');
  return '';
};
Blockly.Python['grove_slide_pot_read'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'slidePotentiometer', 'Slide_Potentiometer');
  var code = `slidePotentiometer${port}.read_position()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_ultrasonic_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'ultrasonicSensor', 'Ultrasonic_Sensor');
  return '';
};
Blockly.Python['grove_ultrasonic_inches'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'ultrasonicSensor', 'Ultrasonic_Sensor');
  var code = `ultrasonicSensor${port}.distance_in_inches()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_ultrasonic_cm'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'ultrasonicSensor', 'Ultrasonic_Sensor');
  var code = `ultrasonicSensor${port}.distance_in_cm()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_button_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'buttonSensor', 'Button_Sensor');
  return '';
};
Blockly.Python['grove_button_is_pressed'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'buttonSensor', 'Button_Sensor');
  var code = `buttonSensor${port}.is_pressed()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_pir_motion_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'pirMotionSensor', 'PIR_Motion_Sensor');
  return '';
};
Blockly.Python['grove_pir_motion_detect'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'pirMotionSensor', 'PIR_Motion_Sensor');
  var code = `pirMotionSensor${port}.pir_read()`;
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['grove_led_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'groveLED', 'LED');
  return '';
};
Blockly.Python['grove_led_on'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'groveLED', 'LED');
  return `groveLED${port}.on()`;
};
Blockly.Python['grove_led_off'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'groveLED', 'LED');
  return `groveLED${port}.off()`;
};
Blockly.Python['grove_buzzer_init'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'groveBuzzer', 'Buzzer');
  return '';
};
Blockly.Python['grove_buzzer_on'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'groveBuzzer', 'Buzzer');
  return `groveBuzzer${port}.on()`;
};
Blockly.Python['grove_buzzer_off'] = function(block) {
  var port = block.getFieldValue('PORT');
  grove_definition(port, 'groveBuzzer', 'Buzzer');
  return `groveBuzzer${port}.off()`;
};

function servo_definition(port) {
  Blockly.Python.definitions_.import_grove = 'import grove';
  var instantiation = `servo${port} = pyb.Servo(grove.Port['${port}'])\n`;
  Blockly.Python.definitions_['servo' + port] = instantiation;
}
Blockly.Python['servo_angle'] = function(block) {
  var port = block.getFieldValue('PORT');
  var angle = block.getFieldValue('ANGLE');
  servo_definition(port);
  return `servo${port}.angle(${angle})\n`;
};
Blockly.Python['servo_speed'] = function(block) {
  var port = block.getFieldValue('PORT');
  var speed = block.getFieldValue('SPEED');
  servo_definition(port);
  return `servo${port}.speed(${speed})\n`;
};
Blockly.Python['servo_angle_advanced'] = function(block) {
  var port = block.getFieldValue('PORT');
  var angle = Blockly.Python.valueToCode(block, 'ANGLE', Blockly.Python.ORDER_NONE);
  servo_definition(port);
  return `servo${port}.angle(${angle})\n`;
};
Blockly.Python['servo_speed_advanced'] = function(block) {
  var port = block.getFieldValue('PORT');
  var speed = Blockly.Python.valueToCode(block, 'SPEED', Blockly.Python.ORDER_NONE);
  servo_definition(port);
  return `servo${port}.speed(${speed})\n`;
};

Blockly.Python['display_clear'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  return 'display.clear()\n';
};
Blockly.Python['display_clear_no_refresh'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  return 'display.clear(refresh=False)\n';
};
Blockly.Python['display_fill'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  return 'display.fill()\n';
};
Blockly.Python['display_pixel'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('COLOR') == "#ffffff" ? 'True' : 'False';
  return `display.pixel(${x}, ${y}, state=${state})\n`;
};
Blockly.Python['display_text'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var x = block.getFieldValue('X');
  var y = block.getFieldValue('Y');
  var size = block.getFieldValue('SIZE');
  return `display.text(${x}, ${y}, ${text}, size=${size})\n`;
};
Blockly.Python['display_text_advanced'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_ATOMIC);
  var inverted = block.getFieldValue('INVERTED') == 'TRUE' ? 'True' : 'False';
  var refresh = block.getFieldValue('REFRESH') == 'TRUE' ? 'True' : 'False';
  return `display.text(${x}, ${y}, ${text}, size=${size}, inverted=${inverted}, refresh=${refresh})\n`;
};
Blockly.Python['display_title'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_ATOMIC);
  var size = block.getFieldValue('SIZE');
  return `display.title(${title}, size=${size})\n`;
};
Blockly.Python['display_title_advanced'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var title = Blockly.Python.valueToCode(block, 'TITLE', Blockly.Python.ORDER_ATOMIC);
  var size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_ATOMIC);
  var inverted = block.getFieldValue('INVERTED') == 'TRUE' ? 'True' : 'False';
  var refresh = block.getFieldValue('REFRESH') == 'TRUE' ? 'True' : 'False';
  return `display.title(${title}, size=${size}, inverted=${inverted}, refresh=${refresh})\n`;
};
Blockly.Python['display_rect'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var x = block.getFieldValue('X');
  var y = block.getFieldValue('Y');
  var w = block.getFieldValue('W');
  var h = block.getFieldValue('H');
  return `display.rect(${x}, ${y}, ${w}, ${h})\n`;
};
Blockly.Python['display_rect_advanced'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var w = Blockly.Python.valueToCode(block, 'W', Blockly.Python.ORDER_ATOMIC);
  var h = Blockly.Python.valueToCode(block, 'H', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('COLOR') == "#ffffff" ? 'True' : 'False';
  var refresh = block.getFieldValue('REFRESH') == 'TRUE' ? 'True' : 'False';
  return `display.rect(${x}, ${y}, ${w}, ${h}, state=${state}, refresh=${refresh})\n`;
};
Blockly.Python['display_line'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var x0 = block.getFieldValue('X0');
  var y0 = block.getFieldValue('Y0');
  var x1 = block.getFieldValue('X1');
  var y1 = block.getFieldValue('Y1');
  return `display.line(${x0}, ${y0}, ${x1}, ${y1})\n`;
};
Blockly.Python['display_line_advanced'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var x0 = Blockly.Python.valueToCode(block, 'X0', Blockly.Python.ORDER_ATOMIC);
  var y0 = Blockly.Python.valueToCode(block, 'Y0', Blockly.Python.ORDER_ATOMIC);
  var x1 = Blockly.Python.valueToCode(block, 'X1', Blockly.Python.ORDER_ATOMIC);
  var y1 = Blockly.Python.valueToCode(block, 'Y1', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('COLOR') == "#ffffff" ? 'True' : 'False';
  var refresh = block.getFieldValue('REFRESH') == 'TRUE' ? 'True' : 'False';
  return `display.line(${x0}, ${y0}, ${x1}, ${y1}, state=${state}, refresh=${refresh})\n`;
};
Blockly.Python['display_circle'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var x = block.getFieldValue('X');
  var y = block.getFieldValue('Y');
  var r = block.getFieldValue('R');
  return `display.circle(${x}, ${y}, ${r})\n`;
};
Blockly.Python['display_circle_advanced'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);
  var r = Blockly.Python.valueToCode(block, 'R', Blockly.Python.ORDER_ATOMIC);
  var state = block.getFieldValue('COLOR') == "#ffffff" ? 'True' : 'False';
  var refresh = block.getFieldValue('REFRESH') == 'TRUE' ? 'True' : 'False';
  return `display.circle(${x}, ${y}, ${r}, state=${state}, refresh=${refresh})\n`;
};
Blockly.Python['display_show'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  return 'display.show()\n';
};
Blockly.Python['display_invert'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var checkbox_invert = block.getFieldValue('INVERT') == 'TRUE' ? 'True' : 'False';
return `display.set_inverted(${checkbox_invert})\n`;
};
Blockly.Python['display_contrast'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  var contrast = block.getFieldValue('CONTRAST');
  return `display.set_contrast(${contrast})\n`;
};
Blockly.Python['display_on'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  return 'display.on()\n';
};
Blockly.Python['display_off'] = function(block) {
  Blockly.Python.definitions_.import_display = 'import display';
  return 'display.off()\n';
};
